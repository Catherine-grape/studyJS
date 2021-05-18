// 整个项目的根组件
import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import './assets/css/reset.min.css';
import './assets/css/common.css';

import Home from './pages/home/index';
import Classify from './pages/classify/index';
import GoShop from './pages/goShop/index';
import Personal from './pages/personal/index';
import Taste from './pages/taste/index';

import TabBar from './components/tabBar/index';
class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    {/* Switch 显示匹配的第一个   exact精准匹配 */}
                    <Route path="/" exact={true} component={Home}></Route>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/classify" component={Classify}></Route>
                    <Route path="/goshop" component={GoShop}></Route>
                    <Route path="/personal" component={Personal}></Route>
                    <Route path="/taste" component={Taste}></Route>
                    {/* <Route component={Home}></Route> */}
                    <Redirect to='/home'></Redirect>
                </Switch>
                <div> <TabBar></TabBar></div>
            </HashRouter>
        )
    }
}
export default App