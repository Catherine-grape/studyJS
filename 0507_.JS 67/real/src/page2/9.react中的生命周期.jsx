import React from 'react';
import ReactDOM from 'react-dom';

// 在react初始化的时候，到了固定的阶段就会执行对应的钩子函数，我们可以在对应的钩子函数嵌入我们自己的逻辑
class Com extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num: 100, msg: 'hello' };
        console.log('constructor'); //当初始化组件的时候，该函数是第一个执行的，它会创建this实例
        // 可以初始化状态，还可以接收从外界传递过来的属性
    }
    componentWillMount() {
        // 当前函数会在组件挂载之前执行，而且在这里的this就是当前的组件实例
        // 在这里可以去更改state中的数据，不会引起视图的更新「render的执行」
        // 一般在这里可以去发送数据请求
        this.state.num = 200;
        console.log('componentWillMount');
    }
    add = () => {
        this.setState({
            num: 800,
            msg: 'world'
        })
    }
    render() {
        // render也是一个钩子函数
        console.log('render');//组件挂载到实例上的时候就会执行
        return (
            // 内部是一个对象，语法糖
            <div>
                {this.state.num}
                <button onClick={this.add}>点击</button>
            </div>
        )
    }
    componentDidMount() {//当此函数执行的时候，说明组件已经挂载完毕了,在这里可以拿到真实的dom元素，在这里也可以发送数据请求
        console.log('componentDidMount');
        // this.state.num = 900;//视图不会更新
        // 初始化的时候执行以上钩子函数
    }
    shouldComponentUpdate(nextProps, nextState) {//性能优化
        // 当前钩子函数初始化的时候不执行，在后期更改状态的时候才会执行，而且它是更改状态的时候第一个执行的函数，如果此函数返回true，那视图会正常刷新，如果返回false，那视图就会停止刷新，后面的钩子函数也不会执行，那在这里就可以做性能优化
        console.log('shouldComponentUpdate');
        // return true //shouldComponentUpdate  componentWillUpdate  render  componentDidUpdate
        //return false //shouldComponentUpdate
        console.log(this.state, nextState); //{num: 200, msg: "hello"} {num: 200, msg: "world"}
        if (this.state.num === nextState.num) {//判断当前数据的state与最新的state是否一样，如果一样没必要更新
            return false
        }
        return true

        //JSON.stringify(nextProps) ===JSON.stringify(this.props)
    }
    componentWillUpdate() {//在后期更改状态之前的时候，此函数就会执行
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        //在后期更改状态之后的时候，此函数就会执行
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {//在组件卸载之前会调用此钩子函数
        console.log('componentWillUnmount');
    }

}

ReactDOM.render(<><Com></Com></>, document.getElementById('root'));