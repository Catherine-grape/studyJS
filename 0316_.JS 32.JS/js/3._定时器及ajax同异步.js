// setTimeout 到达某个时间只会执行一次的定时器
// setInterval 每隔指定的时间就会执行一次（周期性的）
// 浏览器对于定时器的最小识别时间是不一样的，谷歌5～6ms  火狐10～12ms  IE 13～15ms
// 定时器的返回值是一个数字，它所代表的是当前定时器在页面总个数（第几个）

let timr1 = setTimeout(() => {
    console.log(100);
}, 3000);
let timr2 = setTimeout(() => {
    console.log(200);
}, 4000);
console.log(3);
clearTimeout(timr1);//在定时器到达时间之前被清除了，那定时器就不会再输出了
console.log(timr1, timr2);
// 3 1 2 200

function fn() {
    var a = setTimeout(function () { }, 1000);
    console.log(a);//2
}
var timer = setTimeout(function (a) {
    console.log(a);
    return 100;
}, 1000, 3)
// 定时器从第三个参数开始都是给回调函数的实参
clearTimeout(timer);
fn();
console.log(timer);//2 1


setTimeout((a, b, c) => {
    console.log(a, b, c);
}, 1000, 1, 2, 3);

// 当浏览器解析js时，会先把所有的同步代码执行完，然后再执行异步队列中的代码
// 在代码执行的时候，会有一个异步任务队列，js 的住县城从上往下执行代码的时候，会一行一行的执行，当执行的时候如果遇到了异步的任务，它会把这个任务存放到异步任务队列中（由浏览器分配的新线程来执行），主线程再继续往下执行代码，当主线程把所有的同步代码执行完成之后，再去异步任务队列中查看有没有达到执行输出条件的异步任务，如果有就拿到执行栈中进行输出，反复执行这个逻辑。
// js是单线程：js同一时间只能执行一行代码

console.log(1);
setTimeout(() => {
    console.log(100);
}, 10)
setTimeout(() => {
    console.log(200);
}, 0)
setTimeout(() => {
    console.log(300);
}, 9)
console.log(3);

$.ajax('xxxx');//第一个ajax请求 50ms
$.ajax('xxxx');//第二个ajax请求 60ms
$.ajax('xxxx');//第三个ajax请求 70ms

// 定时器 ajax 事件 异步 promise(非常重要 解决异步回调 地域问题) async await

// promise 让异步代码以同步的形式展现

// 第二次的ajax请求会用到第一次ajax请求的返回值当作参数

$.ajax({
    url: 'xxx',//请求路径
    async: true,//是否同异步
    type: 'get',//请求的方式
    success: () => {
        //请求成功之后执行的回调
    },
    error: () => {
        //请求失败之后执行的回调
    },
    compelte: () => {
        //不论请求成功和失败都执行
    }
});
$.ajax('xxx', {
    success: () => {

    }
})