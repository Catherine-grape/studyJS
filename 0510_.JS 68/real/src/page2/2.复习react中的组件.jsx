import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// 组件的创建

/* 
普通函数式组件  类声明的组件
*/
// 组件的名字开头必须要大写
function Foo(props) {//当前的形参props是一个对象类型的值
    let { a, b } = props
    // 普通函数式组件，没有自己的状态，没有声明周期，没有this「不使用this没有意义」
    // 由于上述特点的存在，函数式组件只能实现一些简单的展示性的业务逻辑.优点结构简单，性能高。
    console.log(this);//undefined
    /* fn=()=>{
        
        console.log(111);
    } */
    return <div >我是Foo组件{a}</div>
}
// 可以使用空标签「就是最大的根标签」做占位


// 类组件
// class Com extends React.Component{ }
class Com extends Component {
    constructor(props) {//要写super。在外界往里面传递参数的时候再使用constructor，想用属性再写 不用的时候可以不写
        super(props);//没有super无法继承私有属性
        this.state = {
            num: 100
        };//与下面的state是一样的
    }
    // state = {};
    static state = {//给当前类增加键值对

    }
    // 给类组件中给元素绑定方法梦一般都是把方法存储到this实例上或者原型上


    acc(e) {// 在react中的事件对象是一个合成对象，「在原生事件对象的基础上增加了一些新的属性
        console.log(e, this);
    }
    abb = (e, num) => {
        console.log(e, num, this);//num就是传递过来的实参，事件对象e还是存在的，只不过放到最后去接收
    }
    add(e) {//里面的箭头函数是有事件对象的，再传递进来，bind也是这样做的
        console.log(e, this);
    }
    res = () => { this.add(e, 100) }; //算是性能优化
    render() {//没有render 组件是没有任何东西的
        let { a } = this.props;
        let { num } = this.state;
        return (<div >
            我是com组件{a}{num}
            <span onClick={this.acc}>第一种</span>
            <p onClick={this.abb.bind(null, 100)}>第二种</p>
            <div onClick={(e) => { res }}>第三种</div>
        </div>)
    }
}
let diss = <>
    {/* <Foo></Foo> 这个就相当于函数执行，在行间进行传参 */}
    <Foo a={100} b={200}></Foo>
    <Com a={300}> </Com>
</>
ReactDOM.render(diss, document.getElementById('root'));