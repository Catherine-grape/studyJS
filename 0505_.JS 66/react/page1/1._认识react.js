import React from 'react';
import ReactDOM from 'react-dom';
// React 和ReactDOM是react框架的核心模块
// let a = <span ss="100" id="app">111</span>;
let a = <ul>
    111
    <li>1</li>
    <li>1</li>
    <li>1</li>
</ul>;

// a里面的props 是ul

// 当前这种语法叫做jsx语法，他不是html，它是虚拟的dom对象，这种语法浏览器是不支持的，可以通过webpack进行编译，把jsx语法编译成咱们浏览器可以识别的语法。
// 现在标签的写法是一种语法糖，就是为了方便你书写的，并不是真实的dom元素
/* 
1. 当往root元素中挂载的时候，会把root中的其他元素进行覆盖
2. ReactDOM.render函数可以执行多次，如果每一次都是往root中进行插入，那下面的会覆盖上面的
3. render函数的dom渲染是同步的过程
*/
console.log(a);
// render把虚拟的dom元素对象编译成真是的dom元素，并且挂载到root元素中
let b = <span>222</span>

/* 
render函数中的参数

1. 虚拟的dom元素 「当前的虚拟dom元素必须只有一个根元素,如果想写多个元素，最外层可以拿一个元素包裹起来」
2. 真实的dom元素「把虚拟的dom元素编译之后挂载到真实的元素上」
3. 回调函数「此函数会在dom元素渲染完成之后去执行」
*/
ReactDOM.render(a, document.getElementById('root'), () => {
    // 此函数会在dom元素渲染完成之后去执行
    // console.log(document.getElementById('app'));
});
// ReactDOM.render(b, document.getElementById('root'));

console.log(document.getElementById('app'));

