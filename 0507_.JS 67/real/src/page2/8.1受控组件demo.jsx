import React from 'react';
import ReactDOM from 'react-dom';

class A extends React.Component {
    constructor() {
        super();
        this.state = {
            sum: 0
        }
    }
    change = () => {
        console.log(this.refs);
        /* let a = Number(this.refs.a.value),
            b = Number(this.refs.b.value);
        this.setState({
            sum: a + b
        }) */
        console.log(this);
        let a = Number(this.refs.a.value),
            b = Number(this.x.value);
        this.setState({
            sum: a + b
        })
    }
    render() {
        let { sum } = this.state;
        return <div>
            {/* ref的值有两个类型：1. 字符串a，它会把当前获取的元素存放到refs里。
                                2. 函数，函数的第一个形参就是当前元素，在函数中，你可以随意处置当前的形参元素 */}
            {/* 如果把ref放到普通标签上，那获取的就是原生元素，如果把ref放到组件上，那获取的就是当前的组件 */}
            {/* <input ref='a' onChange={this.change} />
            <input ref='b' onChange={this.change} /> */}
            <input ref='a' onChange={this.change} />
            {/*  this是当前的实例，x是react内部给你传递的原生的input这个元素 */}
            <input ref={(x) => { this.x = x }} onChange={this.change} />
            {sum}
        </div>
    }
}
ReactDOM.render(<><A></A></>, document.getElementById('root'));