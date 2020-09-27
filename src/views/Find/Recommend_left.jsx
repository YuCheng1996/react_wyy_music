import React, { Component } from 'react'
import { Divider } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

export default class RecommendLeft extends Component {
    render() {
        return (
            <div>
                <div className="find_main_left">
                    <div className="find_main_left_hd">
                        <div className="find_main_left_hd_left">
                            <div className="find_main_left_hd_title">
                                <span className="icon" aria-label="aria-label" role='img' >⭕️</span>
                                热门推荐
                            </div>
                            <div className="find_main_left_hd_list">
                                <div>
                                    华语
                                </div>
                                <Divider type="vertical" />
                                <div>
                                    流行
                                </div>
                                <Divider type="vertical" />
                                <div>
                                    摇滚
                                </div>
                                <Divider type="vertical" />
                                <div>
                                    民谣
                                </div>
                                <Divider type="vertical" />
                                <div>
                                    电子
                                </div>
                                <Divider type="vertical" />
                            </div>
                        </div>

                        <div className="find_main_left_hd_right">
                            更多
                          <ArrowRightOutlined />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
