import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './action';
// import * as servers from '../../api/home';
import Banner from '../../components/banner/index';
class Home extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // 当组件加载的时候，此钩子函数就会执行
        /* servers.init().then((result) => {
            // 发送请求的一种形式
            console.log(result);
            this.props.actionInit(result);
        }) */
        this.props.actionInit({});
    }
    fn = (index) => {
        console.log('点击轮播', index);
        let link = this.props.homeState.sliders[index].link;
        window.location.href = link;
    }
    render() {
        // console.log(this.props.homeState.list);
        // let { activity } = this.props.homeState
        // let { list } = this.props.homeState
        console.log(this.props.homeState);
        let { sliders } = this.props.homeState
        return (
            <div>
                {
                    // activity && activity.length ? <div>我是home</div> : <div>正在加载中</div>
                }

                <Banner data={sliders} cb={this.fn}></Banner>
            </div>
        )
    }
}
let mapStateToProps = (state) => {
    return (
        {
            homeState: state.home
            // 不容易重名
        }
    )
}
/* let mapActionsToProps = (dispatch) => {
    return {
        actionInit: (value) => { dispatch(actions.actionInit(value)}
    }
} */
export default connect(mapStateToProps, actions)(Home) 