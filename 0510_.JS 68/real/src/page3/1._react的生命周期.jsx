// 样式作用域，react没有，但是webpack可以做到  vue组件是vue结尾

import React, { Component } from 'react';

class Com1 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        console.log('render-com1');

        let { a } = this.props
        return (
            <div>我是com1组件{a}</div>
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
        let newProps = JSON.stringify(nextProps);//'{"a":xxx}'
        let oldProps = JSON.stringify(this.props);//'{"a":1}'
        if (newProps == oldProps) {
            return false
        }
        return true
    }
}
class Com2 extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        console.log('render-com2');
        let { b } = this.props
        return (
            <div>我是com2组件{b}</div>
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
        let newProps = JSON.stringify(nextProps);//'{"a":xxx}'
        let oldProps = JSON.stringify(this.props);//'{"a":1}'
        if (newProps == oldProps) {
            return false
        }
        return true
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
                <Com1 a={a} />
                <Com2 b={b} />
            </div>
        )
    }
    componentDidMount() {
        // 挂载到实例上
    }
    // ----------------以上是初始化会执行的生命周期
    /* shouldComponentUpdate(nextProps, nextState) {
        // 此函数初始化的时候不执行，当以后你更改组件的状态的时候他才会执行
        // 比较特殊的是，可以接收两个参数，前面放的是属性，后面放的是状态「更改之后的状态」，调用setState之后，更改组件之后nextProps最新的属性
        // 此函数中的nextProps是最新的属性，nextState是最新的状态，当此函数return true 的时候，更新继续，当return false 更新停止
        // 不止在自己身上使用，还可以在儿子上使用
        if (this.state.a == nextState.a) {
            return false
        }
        return true
    } */
    componentWillUpdate() {

    }
    componentDidUpdate() {

    }
    componentWillUnmount() {

    }
}

export default Father;