// 事件对象
// 当我们触发元素上的某一些事件行为的时候，浏览器会默认把一些当前的事件信息传递给触发的函数
box1.onclick = function (e) {
   // console.log(e);
    console.log(e.target);//span
    // 元素鼠标点击的事件对象
    // 1.clientX:当前鼠标点击的位置距离可视区域（浏览器窗口）左边的距离
    // 2.clientY:当前鼠标点击的位置距离可视区域（浏览器窗口）上边的距离
    // 3.offsetX:当前鼠标点击的位置，距离当前盒子左内边框的距离（不包含border）
    // 4.offsetY:当前鼠标点击的位置，距离当前盒子上内边框的距离（不包含border）
    // 5.pageX:当前鼠标点击的位置，距离body左边框的距离
    // 6.pageY:当前鼠标点击的位置，距离body上边框的距离（包括滚动）

    // 7.target：事件源，当前的事件是谁触发的，那事件源就是谁
    // 8.type:当前触发的事件类型
    // 9.e.preventDefault():阻止当前事件的默认行为
    //   e.returnValue=false//阻止当前事件的默认行为
    //   在函数中直接return false 有一定缺陷 return后的代码都不执行


    // 如果在键盘上还会有一个特殊的事件对象
}

span.onclick = function () {
    console.log('span');
}


// 在键盘上还会有一个特殊的事件对象

window.onkeydown = function (e) {
    console.log(e);
    //code:代表当前按下的按键的名称
    // keyCode：当前按下的按键的键码（判断用户按下的是那个键的时候使用keyCode）
}