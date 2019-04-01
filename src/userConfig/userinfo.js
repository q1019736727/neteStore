const userKey = 'USER_INFO'
const userInfo  = {
  isLogin:function(){
    return window.sessionStorage.getItem(userKey)
  },
  setLogin:function(value){
    window.sessionStorage.setItem(userKey,value)
  }
}

export default userInfo