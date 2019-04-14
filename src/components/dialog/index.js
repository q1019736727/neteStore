import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
class Loading extends Component{
  render() {
    return (
      <div id='dialogWrapper'>
        <span className='dialog'>
          <label>
            加载中...
          </label>
        </span>
      </div>
    );
  }
}
let wrapper
function show() {
  if (!wrapper){
    wrapper = document.createElement('div')
    document.body.appendChild(wrapper)
    ReactDOM.render(<Loading/>,wrapper)
  }
}
function dismiss() {
  ReactDOM.unmountComponentAtNode(wrapper)
  wrapper.parentNode.removeChild(wrapper)
  wrapper = null
}
export default {
  show,
  dismiss
}