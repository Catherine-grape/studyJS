import React from 'react';
import ReactDOM from 'react-dom';

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            num: 0
        }
    }
    change = (e) => {
        console.log(e.target.value);
        this.setState({
            num: e.target.value
        })
    }
    render() {
        let { num } = this.state
        return (
            <div>
                {/* 当前的input框的值，已经受num控制，当用户在视图中更改内容的时候，已经改不了了「受控组件」。这时候可以绑定一个onChange事件，当用户更改内容的时候，onChange事件会执行，这时候可以在事件中对num的值进行修改，从而改变input框的值 受控 */}
                <input value={num} onChange={this.change} />
                {/* 不受控 */}
                <input onChange={this.change} />
            </div>
        )
    }
}

ReactDOM.render(<><Parent></Parent></>, document.getElementById('root'));
