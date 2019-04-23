import React,{Component} from 'react'
import CategoryList from '../../components/categoryPage/categoryList'
import CategoryContent from '../../components/categoryPage/categoryContent'
import './index.scss'
import http from '../../netRequest/http'
import Dialog from '../../components/dialog'

class CateGory extends Component{
  constructor(){
    super()
    this.fetchData()
  }
  state = {
    categoryList:[],
    currentCategory:{}
  }
  fetchData(){
    Dialog.show()
    http.categoryListData().then(response=>{
      Dialog.dismiss()
      this.setState({
        categoryList:[...response.data.categoryList],
        currentCategory:{...response.data.currentCategory}
      })
    }).catch(error=>{
      Dialog.dismiss()
    })
  }
  changeCategory = (id) => {
    Dialog.show()
    http.categoryCurrentData({id}).then(response =>{
      Dialog.dismiss()
      this.setState({
        currentCategory:{...response.data.currentCategory}
      })
    }).catch(error=>{
      Dialog.dismiss()
    })
  }
  render() {
    return (
      <div className='categoryWrapper clearfix'>
        <CategoryList listClick={(id)=>{this.changeCategory(id)}} categoryList={this.state.categoryList}/>
        <CategoryContent currentCategory={this.state.currentCategory}/>
      </div>
    );
  }
}
export default CateGory