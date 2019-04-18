import React,{Component} from 'react'
import './index.scss'

class CategoryList extends Component{
  render() {
    return (
      <div>
        {this.props.children()}
      </div>
    );
  }
}

export default CategoryList