import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.less';
class TabBar extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="tab">
                <NavLink className="link" to="/home">
                    <i className="icon"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink className="link" to="/classify">
                    <i className="icon"></i>
                    <span>分类</span>
                </NavLink>
                <NavLink className="link" to="/taste">
                    <i className="icon"></i>
                    <span>品味</span>
                </NavLink>
                <NavLink className="link" to="/goshop">
                    <i className="icon"></i>
                    <span>购物车</span>
                </NavLink>
                <NavLink className="link" to="/personal">
                    <i className="icon"></i>
                    <span>个人</span>
                </NavLink>
            </div>
        )
    }
}

export default TabBar