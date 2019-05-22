import React, { Component ,Fragment} from 'react';
import userInfo from '../../userConfig/userinfo'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../../redux'
import Tabber from '../../components/Tabbar'
import Login from '../login/login'
import Home from '../home'
import Topic from '../topic'
import Category from '../category'
import Cart from '../cart'
import Mine from '../mine'
import GoodsDetail from '../goodsDetail'
import CateList from '../catelist'
class App extends Component {
  render() {
    let {isLogin} = userInfo
    return (
      <Provider store={store}>
        <div className="App">
          <HashRouter>
            {
              <Fragment>
                <Switch>
                  {isLogin() ?  <Redirect exact path='/' to='/home'></Redirect> : <Redirect exact path='/' to='/login'></Redirect>}
                  <Route  path="/home" component={Home}></Route>
                  <Route path='/goodsdetail/:goodsid' component={GoodsDetail}></Route>
                  <Route path='/login' component={Login}></Route>
                  <Route path='/topic' component={Topic}></Route>
                  <Route path='/category' component={Category}></Route>
                  <Route path='/cart' component={Cart}></Route>
                  <Route path='/mine' component={Mine}></Route>
                  <Route path='/catelist' component={CateList}></Route>
                </Switch>
                <Route component={Tabber}></Route>
              </Fragment>
            }
          </HashRouter>
        </div>
      </Provider>
    );
  }
}


export default App;
