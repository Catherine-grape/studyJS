import React from 'react';
import ReactDOM from 'react-dom';

class Foo extends React.Component {
    constructor(props) {
        // this-->当前实例 
        super(props);
        this.state = {//当前实例自己的响应式数据
            msg: '我是响应式的数据',
            num: 1
        }
    }
    fn(value) {
        let { num } = this.state
        this.setState({
            num: num++
        }, () => {
            // 等到视图刷新之后才会执行
        })
        this.setState({//合成渲染一次
            msg: 'xixi'
        });
        // 调用this.setState两次，但是render只会执行一次,这是react自己的优化机制 。状态是自己的，属性是别人给的
    }
    render() {
        console.log('render');
        return (
            <div>
                <div onClick={() => { this.fn() }}>点击</div>
                <div >{this.state.num}{this.state.msg}</div>      
            </div>)
    }
}
let res = <div>
    <Foo num="100"></Foo>
</div>
ReactDOM.render(res, document.getElementById("root"))