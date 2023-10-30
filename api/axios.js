import { useDispatch, useSelector } from 'react-redux';
import { startLoading, stopLoading, showError } from '../store/reducers/appBehaviourSlice';
import { selectJWT, selectSignupJWT } from '../store/reducers/authSlice';

const createLog = (urlWithParams, body) => `
attempting to make a http call: -
url - ${urlWithParams}
body - ${JSON.stringify(body)}
` 

const startsWith = (number, firstNumber) => number?.toString().charAt(0) === firstNumber.toString()

const onResponseStatus = (responseStatus, setStateCallback, responseBody, showError, shouldBeLogging = false) => {
  if(startsWith(responseStatus, 2)) {
    setStateCallback ? setStateCallback(responseBody) : null
    if (shouldBeLogging) {
      console.log(`responseBody ${responseBody}`)
    }
  } 
  else if (startsWith(responseStatus, 5)) {
    showError()
  }
  else {
    console.log(`Response is ${responseBody}`)
  }
}

const processResponse = (resp, setStateCallback, method, showError) => {
  const responseStatus = resp.status
  const responseUrl = resp.url
  console.log(`${(method, responseUrl)} responsed with status ${responseStatus}`)

  const contentType = resp.headers.get("Content-Type") 

  const reactToOutput = responseBody =>
    onResponseStatus(responseStatus, setStateCallback, responseBody, showError)
  
    contentType.includes("application/json") 
    ? resp.json().then(reactToOutput)
    : resp.text().then(reactToOutput)
}

export const useHttp = () => {
    const dispatch = useDispatch()
    const JWTToken = useSelector(selectJWT)
    const signupJWTToken = useSelector(selectSignupJWT)

    const showErrorScreen = () => dispatch(showError())

    const fetchData = (
      url, 
      method, 
      setStateCallback,
      queryParams, 
      body, 
    ) => {
        dispatch(startLoading())

        const urlWithParams = queryParams 
          ? `${url}?${queryParams.map(pair => 
              `${Object.keys(pair)[0]}=${Object.values(pair)[0]}`).join("&")}`
          : url
        
        console.log(createLog(urlWithParams, body))

        const fetchConfiguration = {
          method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWTToken ?? signupJWTToken}`
          },
          body: JSON.stringify(body)
        }

        fetch(urlWithParams, fetchConfiguration)
            .then(resp => processResponse(resp, setStateCallback, method, showErrorScreen))
            .catch(err => {
                console.log(`fetch error: -  ${err}`)
                showErrorScreen()
            })
            .finally(() => {
                dispatch(stopLoading())
            });
    };

    const makeHttpCall = method => ( 
      url,
      setStateCallback,
      {
        queryParams, 
        body, 
      } = {}) => fetchData(url, method, setStateCallback, queryParams, body)

    const get = makeHttpCall("get")
    const post = makeHttpCall("post")
    const del = makeHttpCall("delete")
    const put = makeHttpCall("put")
    const patch = makeHttpCall("patch")

    return {
      get, post, put, patch, del
    }
};

