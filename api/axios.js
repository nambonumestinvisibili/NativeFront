import axios from 'axios'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { showSpinner, hideSpinner } from '../store/reducers/spinnerSlice'
import Constants from 'expo-constants'

const { manifest } = Constants
const HOST = (false && typeof manifest.packagerOpts === 'object' && manifest.packagerOpts.dev)
  ? "http://" + manifest.debuggerHost.split(':').shift().concat(":7040") + '/'
  : "http://10.0.2.2:7040/"
const NATIVE_PATH = "api/"
const BASE_URL = `${HOST}${NATIVE_PATH}`

axios({

})

axios.defaults.baseURL = BASE_URL;

export const useHttp = () => {
    const dispatch = useDispatch()

    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchData = (
      url, 
      method, 
      queryParams = [], 
      body = {}, 
      headers = {}
    ) => {
        dispatch(showSpinner())
        
        const urlWithParams = queryParams 
          ? `${url}?${queryParams.map(pair => 
              `${Object.keys(pair)[0]}=${Object.values(pair)[0]}`).join("&")}`
          : url
        // debugger
        console.log(url)
        axios[method](urlWithParams, headers, body)
            .then((res) => {
                setResponse(res.data);
                console.log(`${method, url} repsonsed with status ${res.status} and data ${JSON.stringify(res.data)}`)
            })
            .catch((err) => {
                console.log(`axios error: - ${err} ${err.status, err.code, err.response}`)
                setError(err);
            })
            .finally(() => {
                dispatch(hideSpinner())
            });
    };

    const get = ( 
      url,
      {queryParams, 
      body, 
      headers 
      } = {}) => fetchData(url, "get", queryParams, body, headers)

    const post = (
      url, 
      { 
        queryParams, 
        body, 
        headers 
      } = {}) => fetchData(url, "post", queryParams, body, headers)

    const del = ( 
      url, {
        queryParams, 
        body, 
        headers 
      } = {}) => fetchData(url, "delete", queryParams, body, headers)

    const put = ( 
      url, {
        queryParams, 
        body, 
        headers 
      } = {}) => fetchData(url, "put", queryParams, body, headers)

    const patch = (
      url, {
      queryParams, 
      body, 
      headers 
    } = {}) => fetchData(url, "patch", queryParams, body, headers)

    return {
      get, post, put, patch, del
    }
};

export const URLS = {
  interestApi: {
    getAll: `${BASE_URL}Interest`
  }
}