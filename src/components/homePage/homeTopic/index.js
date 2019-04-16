import React, {Component} from 'react'
import {Carousel} from 'antd-mobile';
import './index.scss'

class Topic extends Component {
  state = {}

  componentDidMount() {
    // simulate img dialog
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  render() {
    return (
      <div id='homeTopicWrapper'>
        <h4>专题精选</h4>
        <Carousel className="space-carousel"
                  dots={false}
                  cellSpacing={10}
                  slideWidth={0.8}
                  infinite
                  beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                  afterChange={index => this.setState({slideIndex: index})}
        >
          {
            !this.props.topicList ? null :
              (this.props.topicList.map((item, index) => {
                return (<Item key={index} data={item}></Item>)
              }))
          }
        </Carousel>
      </div>
    );
  }
}

function Item(props) {
  const {item_pic_url, title, price_info, subtitle} = props.data
  return (
    <div className='topicItemWrapper'>
      <img
        src={item_pic_url}
        onLoad={() => {
          window.dispatchEvent(new Event('resize'));
        }}
        alt=""/>
      <div className='topicInfo'>
        <p>
          {title}
          <label>￥{price_info}元起</label>
        </p>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Topic