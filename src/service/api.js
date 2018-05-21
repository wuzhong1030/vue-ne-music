// import fetch from '../config/fetch'

// export const getHotSearch = () => fetch('/search/hot')
import axios from 'axios'
import {
  baseUrl
} from '../config/env'

axios.defaults.timeout = 6000;
axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error)
})
axios.interceptors.response.use((response) => {
  return response;
}, () => {
  return Promise.reject(error)
})

//热搜
export function getHotSearchApi(id) {
  return axios.get(baseUrl + `/search/hot`)
}

//搜索多重匹配
export function getInputSearchApi(keywords) {
  return axios.get(baseUrl + `/search/multimatch?keywords=${keywords}`);
}
