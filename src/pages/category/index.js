import React,{Component} from 'react'
import CategoryList from '../../components/categoryPage/categoryList'
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
  }
  fetchData(){
    Dialog.show()
    http.categoryListData().then(response=>{
      Dialog.dismiss()
      console.log(response)
      this.setState({
        categoryList:[...response.data.categoryList]
      })
    })
  }
  render() {
    return (
      <div>
        <CategoryList categoryList={this.state.categoryList}>
        </CategoryList>
      </div>
    );
  }
}
export default CateGory