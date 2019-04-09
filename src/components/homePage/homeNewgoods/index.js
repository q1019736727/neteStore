import React,{Component} from 'react'
import './index.scss'
class HomeNewGoods extends Component{
  render() {
    return (
      <section className='homenewgoods'>
        <h4>新品首发</h4>
        <div id='homeNewGoodsWrapper'>
          {
            this.props.newGoodsList.map((item,index) => {
              return <Item key={index} {...item}></Item>
            })
          }
        </div>
      </section>
    );
  }
}
function Item(props) {
  const {id,list_pic_url,name,retail_price} = props
  const goGoodsDetail = function () {

  }
  return(
    <span className='newgoodsItem' onClick={goGoodsDetail}>
      <img src={list_pic_url} alt=""/>
      <label className='goodTitle' >{name}</label>
      <label className='goodPrice' >￥{retail_price}</label>
    </span>
  )
}
export default HomeNewGoods