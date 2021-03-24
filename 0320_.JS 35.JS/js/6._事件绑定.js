/* 事件绑定
DOM0级事件绑定 DOM2级事件绑定


给元素的某一个事件类型绑定对应的方法
原理就是给当前时间的属性名赋值
不能够给同一个事件类型绑定多个方法
*/
/* box.onclick=function(){}
box.onclick = function () { } */

// DOM2级事件绑定
let box = document.getElementById('box');
// 元素.addEventListener('事件类型',方法，布尔值)
// 可以给同一个事件类型绑定多个不同的方法
console.log(box);
// 在当前元素身上有一个事件池子（数组），当你调用addEventListener的时候就是往对应的事件池子里增加方法
// 当用户触发事件的时候，会把当前事件类型对应的池子里面的方法依次执行
function fn1() {
    console.log(1);
}
function fn2() {
    console.log(2);
}
box.addEventListener('click', fn1)
box.addEventListener('click',fn2 )
box.addEventListener('mouseup', function fn3() {
    console.log(3);
})
// fn是同一个函数的话只会绑定一次
// 解除事件绑定removeEventListener('事件类型', 解绑的函数名)
// 解除绑定只能在绑定的时候把函数提出来 有名字再解除绑定
box.removeEventListener('click', fn1);


