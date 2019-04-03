const userKey = 'token'
const userInfo  = {
  isLogin:function(){
    return window.localStorage.getItem(userKey)
  }
}

export default userInfo