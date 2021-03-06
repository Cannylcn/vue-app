/**
 *Created by admin on 2018/1/15
 */
import axios from 'axios'
// import router from './router/index'
// import store from './store/types'
// import * as types from './store/types'

axios.default.timeout = 500
axios.defaults.headers.post['Content-Type'] = 'application/json'

const instance = axios.create()
instance.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use = instance.interceptors.request.use
instance.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `token ${localStorage.getItem('token')}`
      // .replace(/(^\")|(\"$)/g, '')
  }
  return config
}, err => {
  return Promise.reject(err)
})

// axios拦截响应
instance.interceptors.response.use(response => {
  return response
}, err => {
  return Promise.reject(err)
})

export default {
  userRegister (data) {
    return instance.post('/api/register', data)
  },
  UserLogin (data) {
    return instance.post('/api/login', data)
  },
  getUser () {
    return instance.get('/api/user')
  },
  delUser (data) {
    return instance.post('/api/delUser', data)
  }
}
