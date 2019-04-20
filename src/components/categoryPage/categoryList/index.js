import React,{Component} from 'react'
import './index.scss'

class CategoryList extends Component{
  render() {
    return (
      <div className='categoryListWraper'>
        <ul>
          <div id='categoryLine'></div>
          {
            this.props.categoryList.map((item,index)=>{
              return(
                <li  key={item.id}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default CategoryList