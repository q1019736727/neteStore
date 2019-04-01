import React, { Component } from 'react';
import Home from '../home'
import Login from '../login/login'
import userInfo from '../../userConfig/userinfo'

class App extends Component {
  render() {
    let {isLogin} = userInfo
    return (
      <div className="App">
        {isLogin() ? <Home/> : <Login/>}
      </div>
    );
  }
}

export default App;
