import React from 'react';
import ReactDOM from 'react-dom';
import Com from './com组件'

let a = <div>11111111</div>
/* 
 react中的组件
 函数式组件 静态组件只能展示 组件可复用 可维护
    - 1. 创建组件
    - 2. 组件的名字必须是大写，为了和内置组件区分开
    - 3. 组件每当使用一次，当前组件函数都会执行一次
    - 4. 当使用组件是，会把行间属性组合成一个对象传给当前组件的实参
    - 5. 如果需要传入一个对象，那么需要对对象进行...展开，然后放入行间属性
 类声明的组件
*/
// 创建函数组件
let arr = [100, 200, 300, 400];
let obj = {
    s: 1, c: 2, v: 3
}
function Foo(props) {
    // 当前的组件就是一个私有的作用域
    console.log(arr);//[100,200,300,400]
    console.log(props);//ary
    let { ary } = props;
    // 在组件中进行数据渲染，要想办法把当前的数组里的每一项变成你想要的标签
    return (
        <ul>
            我是组件
            {ary.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
    // 必须有return  return什么组件中就是什么，必须只有一个根元素
}
// 复用
let root = <div>
    <Foo ary={arr} a="1" b={300} {...obj}></Foo>
    <Foo ary={arr} a="1" b={300} {...obj}></Foo>
    <Foo ary={arr} a="1" b={300} {...obj}></Foo>
    <Foo ary={arr} a="1" b={300} {...obj}></Foo>
    <Com></Com>
           </div>
ReactDOM.render(root, document.getElementById('root'));