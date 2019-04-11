import React,{Component} from 'react'
import './index.scss'
class ImglazyLoad extends Component{
  constructor(props){
    super(props)
  }
  state = {
    isLoad:false,
    isLoading:false
  }
  componentDidMount () {
    this.handler()
    window.addEventListener('scroll', this.handler)
  }
  handler () {
    if(!this.state.isLoading){
      const {offSetTop, realUrl} = this.props
      const visibleBottom = window.scrollY + document.documentElement.clientHeight -offSetTop;
      const imgTop = this.refs.imgLazyLoad.offsetTop
      if(imgTop < visibleBottom){
        let imgObj = new Image()
        imgObj.src = realUrl
        this.setState({isLoading: true})
        new Promise((resolve, reject)=>{
          imgObj.onload = function(){
            resolve(imgObj)
          }
        }).then((imgObj)=>{
          this.setState({isLoad: true})
        })
      }
    }else{
      window.removeEventListener('scroll', this.handler)
    }
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handler)
  }
  render() {
    const { isLoad } = this.state
    const {realUrl, placeHolderUrl} = this.props
    const imgSrc = isLoad?realUrl: placeHolderUrl
    return (
      <img ref="imgLazyLoad" className={isLoad?'imgLazyload loadEnd': 'imgLazyload loading'} src={imgSrc} alt="imgLazyLoad"/>
    );
  }
}
ImglazyLoad.defaultProps = {
  offSetTop: 40,
  placeHolderUrl:'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg'
}
export default ImglazyLoad