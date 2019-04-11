import React, {Component} from 'react'
import './index.scss'
import ImgLazyLoad from "../../imglazyLoad";

class HomeCategory extends Component {
  render() {
    const {goodsList} = this.props
    return (
      <div className='homeCateGory'>
        <h4>品牌制造商直供</h4>
        <div className='homeCategoryWrapper'>
          {
            goodsList.map(item => (
              <Item key={item.id} {...item}></Item>
            ))
          }
          <span className='cateGoryItem'>
              更多{this.props.name}
            <i className='iconfont icon-Next' style={{color:'#666666',fontSize:'30px'}}></i>
          </span>
        </div>
      </div>
    );
  }
}

function Item(props) {
  const {name, list_pic_url, retail_price} = props
  const goGoodsDetail = function () {

  }
  return (
    <span className='cateGoryItem' onClick={goGoodsDetail}>
      {/*<ImgLazyLoad realUrl={list_pic_url} alt=""/>*/}
      <img src={list_pic_url} alt=""/>
      <label className='goodTitle'>{name}</label>
      <label className='goodPrice'>￥{retail_price}</label>
    </span>
  )
}

export default HomeCategory