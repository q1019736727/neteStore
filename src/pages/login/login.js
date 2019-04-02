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

      })
  }
  render() {
    return (
      <div className={'loginWrapper'}>
        <div className={'login'}>
          <div className={'logo'}>
            <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
          </div>
          <form onSubmit={this.loginAction} className={'formWrapper'}>
            <input type="username" defaultValue={15323807318} placeholder={'用户名'}/>
            <input type="password" defaultValue={123456} placeholder={'密码'}/>
            <input type="submit" value={'登录'}/>
          </form>
        </div>
      </div>
    );
  }
}

export default  Login