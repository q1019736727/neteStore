import React,{Component} from 'react'
import {HashRouter,Route} from 'react-router-dom'
import Tabber from '../../components/Tabbar'
import Homepage from '../../components/homePage'
import './index.scss'
class Home extends Component{
  tabrclick(index){

  }
  render() {
    return (
      <div>
        <div className='pageWrapper'>
          <HashRouter>
            <div>
              <Route exact path='/' component={Homepage}></Route>
            </div>
          </HashRouter>
        </div>
        <Tabber tabBarClick={(index)=>{this.tabrclick(index)}}></Tabber>
      </div>
    );
  }
}

export default Home