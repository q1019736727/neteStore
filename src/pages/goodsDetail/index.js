import React,{Component} from 'react'
import http from '../../netRequest/http'
import NavigationBar from '../../components/navigationbar'
class GoodsDetail extends Component{
  state = {

  }
  constructor(){
    super()
    let goodsIDArr = window.location.hash.split('/')
    console.log(goodsIDArr)
    if (goodsIDArr.length>2){
      this.fetchData(goodsIDArr[2])
    } else{
      this.props.history.push({
        pathname:'/'
      })
    }
  }
  fetchData(id){
    http.goodsDetailData({id}).then(response=>{
      this.setState({
        ...response.data
      })
    })
  }

  render() {
    return (
      <div id='goodsDetail'>
        <NavigationBar></NavigationBar>
        <div style={{height:'100px',backgroundColor:'white'}}></div>
      </div>
    );
  }
}
export default GoodsDetail