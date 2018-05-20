// import fetch from '../config/fetch'

// export const getHotSearch = () => fetch('/search/hot')
import axios from 'axios'
import {baseUrl} from '../config/env'

export function getHotSearch (id) {
  const url = baseUrl + `/search/hot`

  return axios.get(url)
}
