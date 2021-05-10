import React from 'react';
import ReactDOM from 'react-dom';

class Foo extends React.Component {
    constructor(props) {
        // this-->当前实例 
        super(props);
    }

    fn() {
        // 想办法让当前函数里的this是实例
        console.log(this);//undefined
    }
    fn1 = () => {
        // 1.在绑定方法的时候，当前函数是普通函数，那就在元素上绑定方法的时候，使用bind把函数this指向预处理函数实例
        // 2.把当前的函数定义为箭头函数，那函数中的this永远是实例
        console.log(this);
    }
    fn2() {
        console.log(this,20);
    }
    render() {
        console.log('render', this);
        let { num } = this.props;
        this.fn()
         
        return (<div>
            {/* 可以传递参数「不仅可以改变this实例，还可以给函数传递实参，配合普通函数使用 */}
            <div onClick={this.fn.bind(this)}>我是Foo组件{num}</div>
            {/* 不能传递参数,仅仅可以保证this实例「配合箭头函数使用」 */}
            <div onClick={this.fn1}>我是Foo组件{num}</div> 
            {/* 可以传递参数 ，原理给点击事件包裹一层函数，当触发点击事件的时候，才会让函数里面的代码执行*/}
            <div onClick={() => { this.fn2() }}>我是Foo组件{num}</div>
            
        </div>)
    }
}
let res = <div>
    <Foo num="100"></Foo>
    {/* <Foo></Foo> */}
</div>
ReactDOM.render(res, document.getElementById("root"))