import React,{Component} from 'react'
import Tabber from '../../components/Tabbar'
import './index.scss'
class Home extends Component{
  tabrclick(index){

  }
  render() {
    return (
      <div>
        <div className='pageWrapper'>

        </div>
        <Tabber tabBarClick={(index)=>{this.tabrclick(index)}}></Tabber>
      </div>
    );
  }
}

export default Home