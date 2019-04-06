import React,{Component} from 'react'
import './index.scss'
class Menu extends Component{
  state = {
    menuInfo:[
      {icon:'http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png',title:'居家'},
      {icon:'http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png',title:'餐厨'},
      {icon:'http://yanxuan.nosdn.127.net/11abb11c4cfdee59abfb6d16caca4c6a.png',title:'配件'},
      {icon:'http://yanxuan.nosdn.127.net/28a685c96f91584e7e4876f1397767db.png',title:'服饰'},
      {icon:'http://yanxuan.nosdn.127.net/7093cfecb9dde1dd3eaf459623df4071.png',title:'志趣'},
    ]
  }
  render() {
    return (
      <div id='homemenuWrapper'>
        {
          this.state.menuInfo.map((item,index)=>{
            return (
              <div className='menuItem' key={index}>
                <img src={item.icon} alt=""/>
                <label>{item.title}</label>
              </div>
            )
          })
        }
      </div>
    );
  }
}
export default Menu