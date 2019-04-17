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
    tabberNameIcons: [{name: '首页', icon: 'icon-home', active: true},
      {name: '专题', icon: 'icon-subject',active: false},
      {name: '分类', icon: 'icon-Category',active: false},
      {name: '购物车', icon: 'icon-cart',active: false},
      {name: '我的', icon: 'icon-icon-test',active: false}
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
    let tempArr = this.state.tabberNameIcons.map(item=>{
      return {...item,active:false}
    })
    tempArr[index]['active'] = true
    this.setState({
      tabberNameIcons:[...tempArr]
    })
  }
  render() {
    console.log(this.props.currentSelect)
    const { match, location, history } = this.props
    let isTab = false
    this.state.linkUrl.forEach(url=>{
      if (location.pathname === url){
        isTab = true
      }
    })
    return (
      <Fragment>
        {
          isTab ?  <div id={'tabbar'}>
            {this.state.tabberNameIcons.map((item,index) => {
              return <Item itemClick={()=>{this.click(index)}}  {...item} key={index}/>
            })}
          </div>: null
        }
      </Fragment>
    );
  }
}

function Item(props) {
  let {name,icon,active,itemClick} = props
  return (
    <div className={'item'} onClick={itemClick}>
      <i className={`iconfont ${icon}`} style={{color: active ? '#b22d30':''}}></i>
      <span className={active ? 'active':''}>
        {name}
      </span>
    </div>
  )
}

export default withRouter(Tabber)