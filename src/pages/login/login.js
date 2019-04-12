import React,{Component} from 'react'
import '../../icon-font/iconfont.css'
import './login.scss'
import http from '../../netRequest/http'
class Login extends Component{
  loginAction(ele){
    ele.preventDefault()
    let elements = ele.currentTarget.elements
    http.login({mobile:elements[0].value,password:elements[1].value})
      .then(data => {
        window.localStorage.setItem('token',data.data.sessionKey)
        this.props.history.push({
          pathname:'/home'
        })
      })
  }
  render() {
    return (
      <div className={'loginWrapper'}>
        <div className={'login'}>
          <div className={'logo'}>
            <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
          </div>
          <form onSubmit={this.loginAction.bind(this)} className={'formWrapper'}>
            <input type="username" defaultValue={15323807318} placeholder={'用户名'}/>
            <input type="password" defaultValue={123456} placeholder={'密码'}/>
            <button type='submit'>登录</button>
          </form>
        </div>
      </div>
    );
  }
}

export default  Login