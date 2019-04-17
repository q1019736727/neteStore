import {TABBAR_CHANGE} from '../actionType'

export default function tabbarReducer(state = {
  currentSelect:0 //当前选中item
},action) {
  switch (action.type) {
    case TABBAR_CHANGE:
      return Object.assign(state,{
        currentSelect:action.payload.currentIndex
      })
      break
    default:
      return state
      break
  }
}