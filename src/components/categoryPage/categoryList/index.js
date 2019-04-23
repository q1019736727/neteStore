import React,{Component} from 'react'
import './index.scss'

class CategoryList extends Component{
  constructor(){
    super()
    this.myRef = React.createRef()
    this.state = {
      currentIndex: 0,
    }
  }
  cateClick(ele,id,index){
    let line = document.getElementById('categoryLine')
    line.style.transform = `translateY(${ele.currentTarget.getBoundingClientRect().top-12}px)`
    this.props.listClick(id)
    this.setState({
      currentIndex:index
    })
  }
  render() {
    const {currentIndex} = this.state
    return (
      <div className='categoryListWraper'>
        <ul>
          <div id='categoryLine'></div>
          {
            this.props.categoryList.map((item,index)=>{
              return(
                <li className={currentIndex === index ? 'active':''}
                    onClick={(ele)=>{this.cateClick(ele,item.id,index)}}
                    key={item.id}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default CategoryList