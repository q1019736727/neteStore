import axios from 'axios'
import api from './api'
const instance = axios.create({
  baseURL: '/api',
  withCredentials: true // 跨域类型时是否在请求中协带cookie
})
const getNewHeaders = () =>{
  return {'x-nideshop-token': window.localStorage.getItem('token')}
}
const request = {
  post(params,url){
    return new Promise((resolve, reject) => {
      instance.post(url, {...params}, {headers:getNewHeaders()})
        .then(data => {
          resolve(data.data)
        }).catch(error => {
          console.log(error)
          reject(JSON.stringify(error))
      })
    })
  },
  get(params,url){
    return new Promise((resolve, reject) => {
      instance.get(url,{...params,headers:getNewHeaders()})
        .then(data => {
          resolve(data.data)
        }).catch(error => {
        console.log(error)
        reject(JSON.stringify(error))
      })
    })
  }
}
const http = {
  login:function(params) {
    return request.post(params,api.loginUrl)
  },
  homeData:function(params) {
    return request.get(params,api.homeUrl)
  },
  topicData:function(params) {
    return request.get(params,api.topicUrl)
  }
}
export default http