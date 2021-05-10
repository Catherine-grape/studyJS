import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';//专门用来做属性校验的

// react 中的数据流是单向的，只能从外面流向里面，不能从里面去改外面
// 让组件对应的视图更新，一共有两种方式，一个是让自己的状态更新，还有一个是让从父亲传递过来的属性更新「让父亲改」
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 100
        }
    }
    change = () => {
        this.setState({
            num: this.state.num + 1
        })
    }
    render() {
        return (
            <div>
                <div>我是父亲组件 {this.state.num}
                    <button onClick={this.change}>点击改变num</button>
                </div>
                <Son num={this.state.num}></Son>
            </div>
        )
    }
}
class Son extends React.Component { //谁接收的就在谁的里面校验并默认值
    constructor(props) {
        super(props);
        this.state = {};
    }
    static propTypes = {//必须是propTypes这个名字
        // 校验属性的方法
        num: PropTypes.number.isRequired//指定当前属性的类型并且是必传项
        // num: PropTypes.number //指定当前属性的类型
    }
    static defaultProps = {
        // 定义默认属性，如果行间没有传递，会解析出默认值来
        // 如果传递会解析传递来的值，默认值会被覆盖
        num: 5
    }
    render() {
        let { num } = this.props;
        // num = 200;
        return (
            <div>
                <div>我是儿子组件</div>
                {num}
            </div>
        )
    }

}

ReactDOM.render(<><Parent></Parent></>, document.getElementById('root'));