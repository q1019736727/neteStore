import React, {Component,Fragment} from 'react'
import {withRouter,NavLink} from 'react-router-dom'//监听路径变化
import {connect} from 'react-redux'
import './index.scss'
import '../../icon-font/iconfont.css'
import changTab from '../../redux/actions/tabbarChange'

@connect(
  state => ({
    currentSelect:state.tabbarReducer.currentSelect
  }),
  {
    changTab
  }
)
class Tabber extends Component {
  state = {
    tabberNameIcons: [{name: '首页', icon: 'icon-home'},
      {name: '专题', icon: 'icon-subject'},
      {name: '分类', icon: 'icon-Category'},
      {name: '购物车', icon: 'icon-cart'},
      {name: '我的', icon: 'icon-icon-test'}
    ],
    linkUrl:[
      '/home',
      '/topic',
      '/category',
      '/cart',
      '/mine',
    ]
  }
  changePage(url){
    this.props.history.push({
      pathname:url
    })
  }
  click = (index)=>{
    this.changePage(this.state.linkUrl[index])
  }
  render() {
    const { match, location, history } = this.props
    let isTab = false
    let currentIndex
    this.state.linkUrl.forEach((url,index)=>{
      if (location.pathname === url){
        isTab = true
        currentIndex = index
      }
    })
    return (
      <Fragment>
        {
          isTab ?  <div id={'tabbar'}>
            {this.state.tabberNameIcons.map((item,index) => {
              return <Item isActive={index===currentIndex} itemClick={()=>{this.click(index)}}  {...item} key={index}/>
            })}
          </div>: null
        }
      </Fragment>
    );
  }
}

function Item(props) {
  let {name,icon,isActive,itemClick} = props
  return (
    <div className={'item'} onClick={itemClick}>
      <i className={`iconfont ${icon}`} style={{color: isActive ? '#b22d30':''}}></i>
      <span className={isActive ? 'active':''}>
        {name}
      </span>
    </div>
  )
}

export default withRouter(Tabber)