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

  }
  fetchData(){
    Dialog.show()
    http.categoryListData().then(response=>{
      Dialog.dismiss()
      console.log(response)
    })
  }
  render() {
    return (
      <div>
        <CategoryList>
          {
            function haha() {
              return '哈哈哈'
            }
          }
        </CategoryList>
      </div>
    );
  }
}
export default CateGory