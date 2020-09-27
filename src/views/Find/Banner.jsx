import React, { Component } from 'react'
import Slider from "react-slick";
import { Image } from 'antd';
import axios from '@/request/request'

export default class componentName extends Component {

    state = {
        bannerList: [],
        backgroundImg: ''
    }

    getBanner() {
        axios.getAction('/banner').then(res => {
            if (res.data.code === 200) {
                this.setState({
                    bannerList: res.data.banners,
                    backgroundImg: res.data.banners[0].imageUrl
                })
            }
        })
    }

    handerChange = (index) => {
        let url = this.state.bannerList[index].imageUrl
        this.setState({
            backgroundImg: url
        })
    }


    nextArrowBtn = () => {
        const { className, style, onClick } = this.props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            arrows: false,
            fade: true,
        };
        let { bannerList, backgroundImg } = this.state

        return (
            <div>
                {/* 头部轮播图 */}
                <div className="header" >

                    <div className="banner" >

                        <div className="banner_bg" style={{
                            'backgroundImage': `url('${backgroundImg}')`
                        }}>

                        </div>
                        <Slider {...settings} afterChange={this.handerChange}>
                            {
                                bannerList.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <Image
                                                width={'100%'}
                                                height={285}
                                                src={item.imageUrl}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </Slider>

                        <div className="null">

                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getBanner()
    }
}
