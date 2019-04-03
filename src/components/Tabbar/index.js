import React, {Component} from 'react'
import './index.scss'
import '../../icon-font/iconfont.css'

class Tabber extends Component {
  state = {
    tabberNameIcons: [{name: '首页', icon: 'icon-home', active: true},
      {name: '专题', icon: 'icon-subject',active: false},
      {name: '分类', icon: 'icon-Category',active: false},
      {name: '购物车', icon: 'icon-cart',active: false},
      {name: '我的', icon: 'icon-icon-test',active: false}
    ]
  }
  click = (index)=>{
    let {tabBarClick} = this.props
    tabBarClick(index)
    let tempArr = this.state.tabberNameIcons.map(item=>{
      return {...item,active:false}
    })
    tempArr[index]['active'] = true
    this.setState({
      tabberNameIcons:[...tempArr]
    })
  }
  render() {
    return (
      <div id={'tabbar'}>
        {this.state.tabberNameIcons.map((item,index) => {
          return <Item itemClick={()=>{this.click(index)}}  {...item} key={index}/>
        })}
      </div>
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

export default Tabber