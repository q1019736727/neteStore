import React,{Component} from 'react'
import './index.scss'
class CateGoryContent extends Component{
  render() {
    console.log(this.props)
    const {banner_url,name,subCategoryList} = this.props.currentCategory
    let catelist = subCategoryList || []
    return (
      <div className='categoryContent'>
        <img src={banner_url} alt=""/>
        <label htmlFor="">—— {name}分类 ——</label>
        <section>
          {
            catelist.map(item=>(
              <Item key={item.id}/>
            ))
          }
        </section>
      </div>
    );
  }
}
function Item() {
  return(
    <div className='categoryContent-item'>

    </div>
  )
}
export default CateGoryContent