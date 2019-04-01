import axios from 'axios'
const instance = axios.create({
  baseURL: '/api',
  withCredentials: true // 跨域类型时是否在请求中协带cookie
})
const getNewHeaders = () =>{
  return {'x-nideshop-token': window.localStorage.getItem('token')}
}
const http = {
  login:function (params) {
    return new Promise((resolve, reject) => {
      instance.post('/auth/loginByMobile',{
        ...params
      },{
        headers:getNewHeaders()
      }).then(data => {
        console.log(data)
      }).catch(error => {
          reject(JSON.stringify(error))
        }
      )
    })
  }
}
export default http