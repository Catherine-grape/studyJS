/* 
$.ajax()
promise 就是让异步代码以同步的方式展现出来，避免了回调地域问题    最常用的then catch  可用到finally、all


promise是ES6的一个内置类
当你new promise的时候必须传递一个回调函数，而且这个回调函数会马上执行，这个回调函数会有两个形参：resolve reject，形参对应的值是两个函数，这两个函数的执行可以改变当前promise实例的状态。
*/
// promise实例会有三个状态，默认是等待态（pending）；
// 当resolve执行的时候状态就会从pending-->fulfilled
// 当reject执行的时候状态就会从 pending-->rejected
// 状态一旦发生变化就会凝固，不可能再改变（只允许修改一次）


// 在promise的原型上有一个then方法供实例去调用，当then执行的时候可以传递两个回调函数，分别会把第一个回调函数存放到成功的事件池子里面（成功的数组），把第二个回调函数存放到失败的事件池子里面（失败的数组），当promise的实例的状态发生变化的时候，会把对应的事件池子（数组）里面的函数异步触发
// 成功态就会执行then中的第一个回调函数，失败态就会执行then中的第二个回调函数


// 当连续调用then的时候，下面的then中的回调函数的执行，要看上面那个then中回调函数的执行返回结果（如果当前回调函数执行的返回结果不是一个新的promise的实例，那下一个then中执行第一个回调函数，如果返回的是一个新的promise的实例，那下一个then中的回调函数的执行就受到当前新的promise实例状态的管控）



// catch
// finally
new Promise(() => {
    
});

// promise新的api
// 页面有三个请求，当三个请求全部成功以后做什么事情
let p1 = new Promise((res, rej) => {
    setTimeout(() => {
        res(100);
    },2000)
});
let p2 = new Promise((res, rej) => {
    setTimeout(() => {
        res(200);
    }, 5000)
});
let p3 = new Promise((res, rej) => {
    setTimeout(() => {
        res(300);
    }, 3000)
});
// Promise.all是自己身上的一个方法，当它执行的时候也会返回一个promise的实例,当all执行的时候可以传递一个数组，数组里存放的是promise的实例，只有当p1，p2，p3实例的状态全都变成成功态的时候，res实例的状态才会是成功态

// 如果p1，p2，p3有一个变为失败态，那res的状态马上就会变成失败态
let res = Promise.all([p1, p2, p3]);
let res = Promise.all([1, 2, 3]);//默认把1，2，3变成promise的成功实例 并马上执行
res.then((res) => {//当三个实例都为成功态之后 res才会变成成功态 然后res再去做什么事
    console.log(res, '当前页面全部请求完毕');//[100,200,300] 当前页面全部请求完毕
});


let res = new Promise((res, rej) => {
    setTimeout(() => {
        res(100);
    })
});
console.log(res);