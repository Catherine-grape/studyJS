import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css'; // 轮播图的样式
import './index.less';
class Banner extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { data } = this.props;
        return <div className="swiper-container">
            <div className="swiper-wrapper">
                {data.map((item, index) => {
                    return <div className="swiper-slide" key={index}>
                        <img src={item.url} alt="" />
                    </div>
                })}
            </div>
            {/* <!-- 如果需要分页器 --> */}
            <div className="swiper-pagination"></div>

            {/* <!-- 如果需要导航按钮 --> */}
            {/* <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div> */}

            {/* <!-- 如果需要滚动条 --> */}
            {/* <div className="swiper-scrollbar"></div> */}
        </div>
    }
    componentDidMount() {
        var mySwiper = new Swiper('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            on: {
                click: () => {
                    //  mySwiper.realIndex // 他是当前页面展示的图片对应的索引
                    this.props.cb(mySwiper.realIndex)
                },
            },
            autoplay: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            // navigation: {
            //   nextEl: '.swiper-button-next',
            //   prevEl: '.swiper-button-prev',
            // },

            // 如果需要滚动条
            // scrollbar: {
            //   el: '.swiper-scrollbar',
            // },
        })
    }
}

export default Banner