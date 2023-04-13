import { DEV_DOMAIN } from "../config/devconfiguration"
import { useHttp } from "./axios"

const HOST = DEV_DOMAIN
const NATIVE_PATH = "api/"
const BASE_URL = `${HOST}${NATIVE_PATH}`

const surroundWithRoot = urlPath => `${BASE_URL}${urlPath}`

const httpCall = (methodCall, url, setStateCallback, body) => 
  methodCall(surroundWithRoot(url), setStateCallback, { body })

const useApi = () => {
  const { get, post, put, patch, del } = useHttp()

  const api = {
    interestApi: {
      getAll: setStateCallback => httpCall(get, 'Interest', setStateCallback),
      postAllBody: (setStateCallback, stringData, dataB) => 
        httpCall(post, `Interest?stringData=${stringData}`, setStateCallback, { data: dataB })
    },
    authApi: {
      login: (setStateCallback, { email, password }) => 
        httpCall(post, 'Authentication/login', setStateCallback, {
           email, password
          }) 
    }
  }

  return { api }
}

export default useApi