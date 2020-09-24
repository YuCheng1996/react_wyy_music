import React, { Component } from 'react'
import './index.scss'
import { Input } from 'antd';
import { NavLink, HashRouter as Router } from 'react-router-dom'

export default class Top extends Component {
    state = {
        headerList: [
            {
                title: '发现音乐',
                url: '/'
            },
            {
                title: '我的音乐',
                url: '/my'
            },
            {
                title: '朋友',
                url: '/friend'
            },
            {
                title: '商城',
                url: '/shop'
            },
            {
                title: '音乐人',
                url: '/musicUser'
            },
            {
                title: '下载客户端',
                url: '/download',
                icon: true
            },
        ],

        navList: [
            {
                title: '推荐'
            },
            {
                title: '排行榜'
            },
            {
                title: '歌单'
            },
            {
                title: '主播电台'
            },
            {
                title: '歌手'
            },
            {
                title: '新品上架'
            },
        ],

        active: 0,
        url: ''
    }

    // 
    headerClick(item, index) {
        return (e) => {

            // 点击改变背景色
            this.setState({
                active: index
            }, () => {
                this.isFind()
            })
        }
    }

    // 判断路由
    isFind() {
        let url = window.location.href.split('/')
        url = url[url.length - 1]
        if (url === 'find' || url === '') {
            this.setState({ url: true })
        } else {
            this.setState({ url: false })
        }
    }

    // 导航栏组件
    headerItem(item, index) {
        return (
            <NavLink key={index} to={item.url ? item.url : '/'} >
                <div
                    className={"headerItem" + (index === this.state.active ? ' active' : '')}
                    onClick={this.headerClick(item, index)}
                >
                    {item.title}
                </div>
            </NavLink>
        )
    }

    // 带icon 的导航栏组件
    headerIconItem(item, index) {
        return (
            <NavLink key={index} to={item.url ? item.url : '/'} >
                <div
                    className={"headerItem" + (index === this.state.active ? ' active' : '')}
                    onClick={this.headerClick(item, index)}
                >
                    <span>hot</span>
                    {item.title}
                </div>
            </NavLink>
        )
    }

    // 红色推荐区域
    headerNav(item, index) {
        return (
            <NavLink key={index} to={item.url ? item.url : '/'} >
                <div className="navItem">
                    {item.title}
                </div>
            </NavLink>
        )
    }

    render() {
        let { headerList, url, navList } = this.state
        const { Search } = Input;

        return (
            <Router>
                <div className="header">
                    <div className="header_top">

                        {
                            headerList.map((item, index) => {
                                return item.icon ? this.headerIconItem(item, index) : this.headerItem(item, index)
                            })
                        }

                        <div className="header_input">
                            <Search placeholder="音乐/视频/电台/用户" />
                        </div>

                        <div className="header_btns">
                            创作者中心
                         </div>

                        <div className="header_login">
                            <span>登陆</span>
                        </div>
                    </div>

                    <div className={"header_bottom " + (url ? ' ' : ' height')}>
                        {
                            navList.map((item, index) => {
                                return this.headerNav(item, index)
                            })
                        }
                    </div>
                </div>
            </Router>
        )
    }

    componentDidMount() {
        this.isFind()
    }
}
