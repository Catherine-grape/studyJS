// 样式作用域，react没有，但是webpack可以做到  vue组件是vue结尾

import React, { Component } from 'react';

class Com1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ss: 100
        }
    }
    componentWillMount() {
        console.log('componentWillMount---com1');
    }
    render() {
        console.log('render-com1');

        return (
            <div>我是com1组件</div>
        )
    }
    componentDidMount() {
        console.log('componentDidMount---com1');
    }
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps--com1');
        // 组件将要接收属性，这里面也可以做一些优化的事情，
        // 当儿子接收从外界传递进来的属性的时候，此函数执行，当儿子组件更新的时候，势必要执行render函数，你可以在render执行之前，在这里把状态改了，不会引起render的更新。只要点击 就会接收props此函数就会执行
        this.state.ss = 300;
        this.setState({ ss: 500 });//在这里可以调用setState不会引起视图再次更新，
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate--com1');
        // this.setState({ ss: 500 }); 在这里不要去调用setState，因为调用它会引起 shouldComponentUpdate钩子函数的执行，这样就死递归了
        return true
    }
    componentWillUpdate() {
        console.log('componentWillUpdate---com1');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate---com1');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount---com1');
    }
}
class Com2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentWillMount() {
        console.log('componentWillMount---com2');
    }
    render() {
        console.log('render-com2');

        return (
            <div>我是com2组件</div>
        )
    }
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate--com2');
        return true
    }
    componentDidMount() {
        console.log('componentDidMount---com2');
    }
    componentWillUpdate() {
        console.log('componentWillUpdate---com2');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate---com2');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount---com2');
    }
}

class Father extends Component {
    static defaultProps = {//给当前组件从外界传递进来的属性赋默认值  有的人认为在初始化的时候，要去解析也算是生命周期

    }
    constructor(props) {
        super(props);
        // this.props.num=100 这个是直接改属性 是更改不了的
        let { num } = this.props
        this.state = {
            num,
            a: 1,
            b: 2
        }
    }
    componentWillMount() {
        console.log('father--willmount');
        this.state.num = 300;
    }
    add = () => {
        this.setState({
            a: 300,
            b: 2
        })
    }
    render() {//每次更新视图render必须执行
        let { a, b } = this.state;
        console.log('render');
        return (
            <div>
                我是Father组件{a}
                <div onClick={this.add}>点击</div>
                <Com2 b={b} />
                <Com1 a={a} />

            </div>
        )
    }
    componentDidMount() {
        console.log('father--didmount');
        // 挂载到实例上
    }
    // ----------------以上是初始化会执行的生命周期
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate--father');
        return true
    }
    componentWillUpdate() {
        console.log('father--willupdate');
    }
    componentDidUpdate() {
        console.log('father--didupdate');
    }
    componentWillUnmount() {
        console.log('father--willunmount');
    }
}

export default Father;