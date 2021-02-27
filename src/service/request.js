import axios from 'axios';

import {
  BASE_URL,
  TIMEOUT
} from '../common/config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
});


instance.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers["authorization"] = `Bearer ${localStorage.token}`;
  }
  return config;
}, err => {
  throw err;
})

instance.interceptors.response.use(res => {
  if (res.data.data && res.data.data.token) {
    localStorage.setItem("token", res.data.data.token)
  }
  return res.data;
}, err => {
  if (!(err && err.response)) throw err;
  const message = err.response.data.message;
  switch(err.response.status) {
    case 400:
      console.log("请求参数错误");
      break;
    case 401:
      if (message === "未授权") {
        localStorage.removeItem('token');
      }
      break;
    default:
      console.log("请求错误");
  }
  throw err;
})
export default instance;