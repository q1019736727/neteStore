import React,{Component} from 'react'
import http from '../../netRequest/http'
import './index.scss'
import Dialog from '../../components/dialog'
class Topic extends Component{
  state = {
    topicList:[]
  }
  componentWillMount(){
    Dialog.show()
    http.topicData({page:1,size:100}).then(data=>{
      Dialog.dismiss()
      this.setState({
        topicList:[...data.data.data]
      })
    })
  }
  render() {
    return (
      <div id='topicPage'>
        {
          this.state.topicList.map(item => (
            <Item key={item.id} {...item}/>
          ))
        }
      </div>
    );
  }
}
function Item(props) {
  const {id,title,price_info,scene_pic_url,subtitle} = props
  return(
    <div className='topicPageItem'>
      <img src={scene_pic_url} alt=""/>
    </div>
  )
}
export default Topic