import React from 'react';
import ReactDOM from 'react-dom';
import bus from './7.1eventBus';
class Parent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bus:bus
        }
    }
    render() {
        return (
            <div>
               我是父亲组件<First></First> <Second></Second>
            </div>
        )
    }
}

class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num:100
        }
    }
    changeNum=(value)=> {
        this.setState({
            num:value
        })
    }
    componentDidMount() {//组件已经挂载完成之后执行的生命钩子函数
        bus.$on('change', this.changeNum);//把组件1中的方法订阅到实例上
    }
    render() {
        return (
            <div>
                我是兄弟1  {this.state.num}
            </div>
        )
    }
}
class Second extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    ss = () => {
        bus.$emit('change',999)
    }
    render() {
        return (
            <div>
                我是兄弟2
                 <button onClick={this.ss}>点击修改兄弟</button>
            </div>
        )
    }
}

ReactDOM.render(<><Parent></Parent> </>, document.getElementById('root'));