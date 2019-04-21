import React,{Component} from 'react'
import './index.scss'

class CategoryList extends Component{
  constructor(){
    super()
    this.myRef = React.createRef()
  }
  cateClick(ele){
    let line = document.getElementById('categoryLine')
    console.log(line)
    line.style.transform = `translateY(${ele.currentTarget.getBoundingClientRect().top-12}px)`
    line.style.animation = '0.1ms liner all'
  }
  render() {
    return (
      <div className='categoryListWraper'>
        <ul>
          <div id='categoryLine'></div>
          {
            this.props.categoryList.map((item,index)=>{
              return(
                <li onClick={this.cateClick}  key={item.id}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default CategoryList