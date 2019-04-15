import React,{Component} from 'react'
import './index.scss'

class NavigationBar extends Component{
  goBack(){
    let a = document.createElement('a')
    a.href = '/'
    a.click()
  }
  render() {
    return (
      <div id='navigationBar'>
        <i className='iconfont icon-back' onClick={this.goBack}></i>
        {/*<label>{this.props}</label>*/}
      </div>
    );
  }
}
export default NavigationBar