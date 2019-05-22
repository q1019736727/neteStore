import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import './index.scss'
class CateGoryContent extends Component{
  render() {
    const {banner_url,name,subCategoryList} = this.props.currentCategory
    let catelist = subCategoryList || []
    return (
      <div className='categoryContent'>
        <img src={banner_url} alt=""/>
        <label htmlFor="">—— {name}分类 ——</label>
        <section>
          {
            catelist.map(item=>(
              <Item clickItem={()=>{this.gocateList()}} {...item} key={item.id}/>
            ))
          }
        </section>
      </div>
    );
  }
  gocateList(){
    console.log(this.props.history)
    this.props.history.push({
      pathname:'/catelist'
    })
  }
}
function Item(props) {
  const {wap_banner_url,name,clickItem} = props
  return(
    <div onClick={clickItem} className='categoryContent-item'>
      <img src={wap_banner_url} alt=""/>
      <label>{name}</label>
    </div>
  )
}
export default withRouter(CateGoryContent)