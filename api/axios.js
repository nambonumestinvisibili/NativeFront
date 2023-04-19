import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectJWT } from '../store/reducers/authSlice';
import { showSpinner, hideSpinner } from '../store/reducers/spinnerSlice';

const createLog = (urlWithParams, body) => `
attempting to make a http call: -
url - ${urlWithParams}
body - ${JSON.stringify(body)}
` 

const onResponseStatus = (responseStatus, setStateCallback, responseBody) => {
  responseStatus === 200 
        ? setStateCallback(responseBody)
        : console.log(responseBody)
}

const processResponse = (resp, setStateCallback, method) => {
  const responseStatus = resp.status
  const responseUrl = resp.url
  console.log(`${(method, responseUrl)} responsed with status ${responseStatus}`)

  const contentType = resp.headers.get("Content-Type") 

  const reactToOutput = responseBody =>
    onResponseStatus(responseStatus, setStateCallback, responseBody)
  
  contentType === "application/json" 
    ? resp.json().then(reactToOutput)
    : resp.text().then(reactToOutput)
}

export const useHttp = () => {
    const dispatch = useDispatch()
    const JWTToken = useSelector(selectJWT)
    
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = (
      url, 
      method, 
      setStateCallback,
      queryParams, 
      body, 
    ) => {
        dispatch(showSpinner())

        const urlWithParams = queryParams 
          ? `${url}?${queryParams.map(pair => 
              `${Object.keys(pair)[0]}=${Object.values(pair)[0]}`).join("&")}`
          : url
        
        console.log(createLog(urlWithParams, body))

        const fetchConfiguration = {
          method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JWTToken}`
          },
          body: JSON.stringify(body)
        }

        fetch(urlWithParams, fetchConfiguration)
            .then(resp => processResponse(resp, setStateCallback, method))
            .catch(err => {
                console.log(`fetch error: -  ${err}`)
                setError(err);
            })
            .finally(() => {
                dispatch(hideSpinner())
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

