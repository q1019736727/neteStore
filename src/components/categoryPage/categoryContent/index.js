import React,{Component} from 'react'
import './index.scss'
class CateGoryContent extends Component{
  render() {
    console.log(this.props)
    const {banner_url,name} = this.props.currentCategory
    return (
      <div className='categoryContent'>
        <img src={banner_url} alt=""/>
        <label htmlFor="">—— {name}分类 ——</label>
        <section>

        </section>
      </div>
    );
  }
}
export default CateGoryContent