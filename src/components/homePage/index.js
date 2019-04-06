import React,{Component} from 'react'
import { Carousel} from 'antd-mobile';
import HomeMenu from '../homeMenu'
// import 'antd-mobile/lib/carousel/style'

class HomePage extends Component{
  state = {
    imgHeight: 176,
    bannerList:['https://yanxuan.nosdn.127.net/8c06fc58e849da6cbaf2838d27f072f3.jpeg',
                'https://yanxuan.nosdn.127.net/d329bc67383ffbbd9e66e8c96a8777b6.jpg',
                'https://yanxuan.nosdn.127.net/a7432d3886dd81931a320c59025a2727.jpg',
                'https://yanxuan.nosdn.127.net/ed9deac1390ddb2bf59dd788dc582572.jpg'
    ]
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
          dotStyle={{backgroundColor:'white'}}
          dotActiveStyle={{backgroundColor:'#b22d30'}}
        >
          {this.state.bannerList.map((val,index) => (
            <a
              key={index}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <HomeMenu></HomeMenu>
      </div>
    );
  }
}
export default HomePage