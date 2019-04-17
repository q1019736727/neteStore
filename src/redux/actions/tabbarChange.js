import {TABBAR_CHANGE} from '../actionType'

export default function tabbarAction(options) {
  return (dispatch)=>{
    return new Promise((resolve, reject) => {
      dispatch({
        type:TABBAR_CHANGE,
        payload:{
          currentIndex:options
        }
      })
      resolve(options)
    })
  }
}