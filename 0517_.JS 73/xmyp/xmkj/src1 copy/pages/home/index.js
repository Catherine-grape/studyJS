import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/header';
import Banner from '../../components/Banner';
import Menu from './components/menu';
import Hot from './components/hot';
import action from '../../store/actions'; // {home:home}

import './index.less';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  render() {
    let {sliders,activity} = this.props;
    console.log(activity);
    return (
      <div className="main-box">
          {/* 头部 */}
          <Header></Header>

          {/* 主体部分 */}
          <div className="main-body">
          {sliders && sliders.length ? <Banner data={sliders}></Banner>:'正在加载'}
          {activity && <Menu data={activity}></Menu>}
          <Hot></Hot>
          </div>

      </div>
    );
  }
  componentDidMount(){
    // 在这里发送首页的初始化的数据
   
    let {sliders} = this.props;
    if(!sliders){
      console.log(1111);
        this.props.init();
    }
    
  }
}

let mapStateToProps = (state) => {
  return {
    ...state.home
  }
}
export default connect(mapStateToProps,action.home)(Home);