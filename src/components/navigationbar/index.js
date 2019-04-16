import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import './index.scss'

class NavigationBar extends Component{
  goBack = () => {
    const {go} = this.props.history
    go(-1)
  }
  render() {
    return (
      <div id='navigationBar'>
        <div className='navWrapper'>
          <i className='iconfont icon-back' onClick={this.goBack}></i>
          <label>{this.props.title}</label>
        </div>
      </div>
    );
  }
}
export default withRouter(NavigationBar)