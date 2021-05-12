import React from 'react';
import ReactDOM from 'react-dom';

// 类组件有状态，有this，有生命周期
class Foo extends React.Component {
    // 当前的constructor和render是组件声明周期函数的一部分，组件被调用的时候constructor先执行，render后执行
    constructor(props) {
        // this-->当前实例 
        super(props);//当前constructor执行完成之后，会在当前this实例上增加一个props对象，里面存放的就是从组件行间传递进来的值
        console.log(this);
    }
    fn = () => {//在component中创建的fn这个函数 this就是当前的实例，普通函数的this就是当前原型
        console.log(this);
    }
    render() {
        // this-->当前实例「render内部执行」
        // 当前此函数会在组件被调用的时候执行，组件被调用几次「使用几次」它就执行几次
        console.log('render', this);
        let { num } = this.props;
        // 从外面给组件传递参数，我们可以在当前组件的实例上的props中获取到相关的属性
        this.fn()
        return (<div>我是Foo组件{num}</div>)
    }
}
let res = <div>
    <Foo num="100"></Foo>
    {/* <Foo></Foo> */}
</div>
ReactDOM.render(res, document.getElementById("root"))