import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num: '100'
        }
    }
    change = (value) => {
        console.log(this);
        /* this.setState({
            num: value
        }) */
    }
    render() {
        return (
            <div>
                <div ref="a">我是父亲组件 {this.state.num}
                    <button onClick={this.change}>点击改变num</button>
                </div>
                {/* 可以把son1的实例c传递给b 但是不会引起视图的更新 */}
                <Son ref="b" c="this.refs.c" num={this.state.num} change={this.change}></Son>

                {/* <Son1 ref="c" num={this.state.num} change={this.change}></Son1> */}
            </div>
        )
    }
}
class Son extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { num, change } = this.props;
        // num = 200;
        return (
            <div>
                <div>我是儿子组件</div>
                <button onClick={change.bind(null, 999)}>点击儿子传数据给父亲</button>
                {num}
            </div>
        )
    }

}

ReactDOM.render(<><Parent></Parent></>, document.getElementById('root'));