//不让它跳转 当成普通对象执行
btn.onclick = function (e) {
    console.log(1);
    e.preventDefault();//禁止了 a元素的默认跳转页面就是一个默认的行为，咱们如果不想使用它的默认行为的话，就可以把它禁止了
    return false;//也可以阻止事件的默认行为
}

box.oncontextmenu = function () {
    console.log('鼠标右击');
    e.preventDefault();//禁止右击 弹出小框    鼠标右击弹出小框也是事件的默认行为，一般情况咱们都给他禁止
}
//e.returnValue = false// 阻止事件的默认行为 
