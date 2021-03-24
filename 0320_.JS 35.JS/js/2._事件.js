// 鼠标事件  click mouseover mouseout mousedown mouseup mousewhell

// 键盘事件  keydown keyup keypress
// 键盘不能随意绑定，可以给表单元素、body、html、window绑定(键盘上的任意一个按键都可以触发)
box.onkeyup = function () {
    console.log(1);
}

window.onkeyup = function (e) {
    console.log(2);
    console.log(e);//浏览器给的实参  keycode码是键盘唯一编码
}

// onload onscroll 
// onhashchange//监听当前页面的hash值发生变化
window.onresize = function () {
    console.log('屏幕尺寸发生变化');
}

window.onhashchange = function () {
    console.log('哈希发生变化');
}


inp.onfocus = function () {//获取光标
    console.log('focus');
}
inp.onblur = function () {//失去光标
    console.log('blur');
} 