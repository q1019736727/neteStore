import React,{Component} from 'react'
import './index.scss'
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom'
class HomeNewGoods extends Component{
  render() {
    return (
      <section className='homenewgoods'>
        <h4>新品首发</h4>
        <div id='homeNewGoodsWrapper'>
          {
            this.props.newGoodsList.map((item,index) => {
              return <Item  key={index} {...item}></Item>
            })
          }
        </div>
      </section>
    );
  }
}
function Item(props) {
  const {id,list_pic_url,name,retail_price,itemClick} = props
  return(
    <Link to={`/goodsdetail/${id}`}>
      <span className='newgoodsItem' onClick={itemClick}>
        <img src={list_pic_url} alt=""/>
        <label className='goodTitle' >{name}</label>
        <label className='goodPrice' >￥{retail_price}</label>
      </span>
    </Link>
  )
}
export default withRouter(HomeNewGoods)