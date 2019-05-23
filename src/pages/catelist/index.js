import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import './index.scss'
class CateList extends Component{
  render() {
    const cateList = this.props.location.catelist || []
    return (
      <div>
        {
          cateList.map((item,index)=>{
            return <div key={index}>分类页</div>
          })
        }
      </div>
    );
  }
}
export default withRouter(CateList)