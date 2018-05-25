// import fetch from '../config/fetch'

// export const getHotSearch = () => fetch('/search/hot')
import axios from 'axios'
import {
  baseUrl
} from '../common/env'

axios.defaults.timeout = 6000;
axios.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error)
})
axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error)
})

//热搜
export function getHotSearchApi(id) {
  return axios.get(baseUrl + `/search/hot`)
}

//搜索建议
export function getSearchSgtApi(keywords) {
  return axios.get(baseUrl + `/search/suggest?keywords=${keywords}`);
}

//搜索建议
export function getSearchResApi(keywords) {
  return axios.get(baseUrl + `/search?keywords=${keywords}`);
}

//轮播图
export function getBanner() {
  return axios.get(baseUrl + `/banner`);
}

//推荐歌单
export function getPersonalizedApi() {
  return axios.get(baseUrl + `/personalized`);
}