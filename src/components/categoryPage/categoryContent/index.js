import React,{Component} from 'react'
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
              <Item {...item} key={item.id}/>
            ))
          }
        </section>
      </div>
    );
  }
}
function Item(props) {
  const {wap_banner_url,name} = props
  return(
    <div className='categoryContent-item'>
      <img src={wap_banner_url} alt=""/>
      <label>{name}</label>
    </div>
  )
}
export default CateGoryContent