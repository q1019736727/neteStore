import React,{Component} from 'react'
import Homepage from '../../components/homePage'
import './index.scss'
class Home extends Component{
  render() {
    return (
      <div className='pageWrapper'>
        <Homepage></Homepage>
      </div>
    );
  }
}

export default Home