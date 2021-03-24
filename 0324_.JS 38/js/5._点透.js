// 当手指触摸到屏幕的时候，系统生成两个事件，一个是touch 一个是click，touch先执行，touch执行完成后，box2从文档树上面消失了，而且由于移动端click还有延迟200-300ms的关系，当系统要触发click的时候，发现在用户点击的位置上面已经没有box2了，目前离用户最近的元素是box1，所以就直接把click事件作用在元素box1上面了

box2.ontouchstart = function (e) {
    console.log('box2 start');
    e.preventDefault();//他会阻止当前元素的所有默认行为在移动端click会被当作默认行为
    setTimeout(() => {//利用定时器让box2在点击事件执行完成之后消失
        box2.style.display = "none";
    },500)
}
box1.onclick = function () {
    console.log('box1 click');
}