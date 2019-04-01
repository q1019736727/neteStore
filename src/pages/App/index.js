import React, { Component } from 'react';
import Home from '../home'
import Login from '../login/login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Home></Home>
          <Login></Login>
        </div>
      </div>
    );
  }
}

export default App;
