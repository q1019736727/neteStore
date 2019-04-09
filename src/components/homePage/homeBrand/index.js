import React,{Component} from 'react'
import './index.scss'
class HomeBrand extends Component{
  render() {
    return (
      <section className='brand'>
        <h4>品牌制造商直供</h4>
        <div id='brandWrapper'>
          {
            this.props.brandList.map((item,index) => {
              return <Item key={index} {...item}></Item>
            })
          }
        </div>
      </section>
    );
  }
}
function Item(props) {
  const {pic_url,floor_price,name,new_pic_url} = props
  const goBrand = function () {

  }
  return(
    <span className='brandItem' onClick={goBrand}>
      <img src={new_pic_url} alt=""/>
      <label className='brandItem-title'>{name}</label>
      <label className='brandItem-des'>{floor_price} 起</label>
    </span>
  )
}
export default HomeBrand