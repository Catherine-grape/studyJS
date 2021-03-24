// 移动端也有click点击事件、但是在移动端上，点击事件有一个缺点，会有一个三百毫秒的延时 300ms，当前点击第一下以后，看你是否在300ms之内去点击第二次，如果点击了，那就是双击事件
// box.onclick = function () {
//     console.log(1);
// }
// 在现在看来300ms的延时已经没用了，因为现在移动端已经很普遍了
// 可以使用第三方的js插件去除300ms延时 fastclick

//window.addEventListener("load", function () {
    //   FastClick.attach(document.body);
    // });

// zepto.js 相当于移动版jq
// $('#box').tap(function () { });


// 移动端的其他事件
// touchstart touchmove  touchend     touchcancel//很难触发这个 一般是被动触发，比如来电话、闹铃 触摸被打断
// 事件对象也是存在的
let box = document.getElementById('box');
box.ontouchstart = function (e) {
    console.log('手指触摸',e);
}
box.ontouchmove = function () {
    console.log('手指移动');
}
box.ontouchend = function () {
    console.log('触摸结束');
}
box.onclick = function () {//与touchmove 互斥 不能一起触发
    console.log('click');
}

// touchstart-- > touchend-- > click
// touchstart-- > touchmove-- > touchend

// touch   mouse  keyboard
// 相对来说querySelectorAll 选择器的兼容比其他的要好一些