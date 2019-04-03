import React,{Component} from 'react'
import Tabber from '../../components/Tabbar'
class Home extends Component{

  tabrclick(index){

  }

  render() {
    return (
      <div>
        <Tabber tabBarClick={(index)=>{this.tabrclick(index)}}></Tabber>
      </div>
    );
  }
}

export default Home