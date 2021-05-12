import React from 'react';
import ReactDOM from 'react-dom';

let num = NaN;
/* 
react中获取变量的方式  大胡子语法{}
如果变量代表的值是基本值，那只能渲染number和string，其他的基本值显示不了
如果变量代表的是引用值，值如果是一个普通对象或者一个函数是不能直接使用的
在行间属性上写style样式的时候，存放的必须是普通对象
样式驼峰命名法, 行间写基本值也要写{}或者 ""
如果在行间想给属性对应的值传递一个指定的数据类型的值，那也可以拿{}包裹起来
状态就是自己身上响应式的数据   属性就是别人给你的
*/
// 组件「this」  属性 状态 生命周期函数

let sty = {}
// let obj = { num: 100 };
// function fn() { };
// let ary=[1,2,3,{name:100}]; 报错
let ary = [1, 2, 3];
/* let res = [];
for (var i = 0; i < ary.length; i++){
    res.push(<div>{ary[i]}</div>)
} */
let a = <div style={{}}>
    {ary.map((item, index) => {
        return <li key={index} s={100}>{item}
            <span>{"600"}</span>
        </li>
    })}
</div>
ReactDOM.render(a, document.getElementById('root'))