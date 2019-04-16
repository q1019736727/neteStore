import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.scss'

class HomeHotSale extends Component {
  render() {
    return (
      <section className='hotSale'>
        <h4>人气推荐</h4>
        <div id='homeHotSaleWrapper'>
          {
            this.props.hotGoodsList.map((item, index) => {
              return <Item key={index} {...item}></Item>
            })
          }
        </div>
      </section>
    );
  }
}

function Item(props) {
  const {id, list_pic_url, name, retail_price, goods_brief} = props
  const goBrand = function () {

  }
  return (
    <Link to={`/goodsdetail/${id}`}>
     <span className='item' onClick={goBrand}>
      <img src={list_pic_url} alt=""/>
      <span className='goodsInfo'>
        <label className='goodsInfo-title'>{name}</label>
        <label className='goodsInfo-des'>{goods_brief}</label>
        <label className='goodsInfo-price'>￥{retail_price}</label>
      </span>
    </span>
    </Link>
  )
}

export default HomeHotSale