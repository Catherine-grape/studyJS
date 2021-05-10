import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
let num = 100;
let bool = true;
let str = '123';
let obj = { name: 500 };
let arr = [<a key="1">100</a>, 200, 300];
let fn = function () {
    console.log(100);
    return 789
    // return { ss: 100 }
    // 如果函数里return的还是一个对象，页面还是会报错
}
// 1. 在react中数字、字符串是可以正常渲染的
// 2. 不能渲染普通对象，但是数组可以「可以把jsx元素编译成正式的dom元素」
// 3. 可以把函数的执行结果放大jsx元素中
// 4. 大括号中是可以写js逻辑语句的
// 5. 咱们现在写的是jsx元素，并不是真正的元素，所以某些行间属性是不能直接写的
// 6. 需要注意的是JSX并不是html，在JSX中属性不能包含关键字，想class需要写成className，for需要写成htmlFor。
// 7. 在JSX元素行间写style写样式的时候可以获取普通对象「仅限在这个地方」
let flag = true
let style = {
    color: 'red',
    fontSize: '18px'
}
let sty = {
    fontSize: '60px'
}
let a = <div b="100" className="aaa bbb ccc" studentinfo="lal" ss-a="lihu" style={style} style={{ color: 'green' }} style={{ color: flag ? "pink" : "yellow" }} style={{ ...sty }}>
    <div>{num}</div>
    <div className="first">
        <span>{600}</span>
        {10000}
    </div>
    <div>{bool}</div>
    <div>{str}</div>
    <div>{null}</div>
    <div>{undefined}</div>
    {/* <div>{obj}</div> */}
    <div>{arr}</div>
    <div>{fn()}</div>
    <div>{obj.name}</div>
    <p>{flag ? 345 : 456}</p>
    <div>{flag ? <span>我是span</span> : <a>我是a</a>} </div>
</div>;

// 在react中的jsx语法中的元素里想动态取值，可以直接使用{}去获取
ReactDOM.render(a, document.getElementById('root'));

console.log(a);