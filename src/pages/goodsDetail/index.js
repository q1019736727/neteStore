import React,{Component,Fragment} from 'react'
import { Carousel } from 'antd-mobile';
import http from '../../netRequest/http'
import NavigationBar from '../../components/navigationbar'
import Dialog from '../../components/dialog'
import './index.scss'
class GoodsDetail extends Component{
  state = {

  }
  constructor(){
    super()
    let goodsIDArr = window.location.hash.split('/')
    if (goodsIDArr.length>2){
      this.fetchData(goodsIDArr[2])
    } else{
      this.props.history.push({
        pathname:'/'
      })
    }
  }
  fetchData(id){
    Dialog.show()
    http.goodsDetailData({id}).then(response=>{
      this.setState({
        ...response.data
      })
    }).then(()=>{
      Dialog.dismiss()
      console.log(this.state)
    })
  }

  render() {
    const {name} = this.state.info || ''
    const {gallery} = this.state
    return (
      <div id='goodsDetail'>
        <NavigationBar title={name}></NavigationBar>
        <main className='pageMain'>
          <Banner list={gallery} ></Banner>
        </main>
      </div>
    );
  }
}
function Banner(props) {
  const {list} = props
  return(
    <Fragment>
      {
        list  ?  <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {
            list.map((item,index)=>(
              <img
                src={item.img_url}
                key={index}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                }}
              />
            ))
          }
        </Carousel> : null
      }
    </Fragment>
  )
}
export default GoodsDetail