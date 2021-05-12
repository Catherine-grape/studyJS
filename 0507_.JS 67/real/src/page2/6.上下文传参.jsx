import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// 与vue中的provide 和inject 一样，平时写逻辑不用，都是用于封装的时候。
class GrandPa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 100,
            msg: 'hello'
        }
    }
    changeNum = (value) => {
        this.setState({
            num: value
        })
    }
    getChildContext() {//在爷爷身上定义给孩子上下文的属性的值 这个名字是固定的
        // 当前函数里的this也是组件的实例
        return {
            num: this.state.num,
            ss: 123,
            changeNum: this.changeNum
        }
    }
    static childContextTypes = {//定义传递给孩子的属性的选项，固定的名字
        num: PropTypes.number,
        ss: PropTypes.number,
        changeNum: PropTypes.func
    }

    render() {
        return (
            <div>
                我是爷爷组件
                {this.state.num}
                <Parent></Parent>
            </div>
        )
    }
}
class Parent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                我是父亲组件
                <Son></Son>
            </div>
        )
    }
}
class Son extends React.Component {
    constructor(props) {
        super(props)
    }
    static contextTypes = {//定义获取的上下文中属性的类型 固定的名字
        num: PropTypes.number,
        ss: PropTypes.number,
        changeNum: PropTypes.func
    }
    render() {
        let { num, changeNum } = this.context
        return (
            <div>
                我是儿子组件
                {num}
                <button onClick={() => { changeNum(123) }}>点击</button>
            </div>
        )
    }
}

ReactDOM.render(<><GrandPa></GrandPa></>, document.getElementById('root'));