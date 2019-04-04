import React,{Component} from 'react'
import { Carousel} from 'antd-mobile';
// import 'antd-mobile/lib/carousel/style'

class HomePage extends Component{
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
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
            {this.state.data.map(val => (
              <a
                key={val}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`http://yanxuan.nosdn.127.net/65091eebc48899298171c2eb6696fe27.jpg`}
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
      </div>
    );
  }
}
export default HomePage