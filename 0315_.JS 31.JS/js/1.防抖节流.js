/* 
防抖节流
1.防抖：在触发元素的某个事件对应的方法执行的时候，在规定的时间之内，只让他触发一次，如果在规定的时间之内用户再次触发该事件，那就会重新计时
一般用在高频点击的事件中
*/


let btn = document.getElementById('btn');
 function fn() {
    console.log(1);
}
let res = _.debounce(fn, 1000, true);//true开头有用 第三个参数不传就是在后面有用，debounce返回的结果是一个新的函数，以后咱们使用的时候也是使用它返回的新函数，
//在debounce执行的时候第一个参数是要进行防抖的函数，第二个参数是间隔时间，第三个参数控制的是防抖的函数在点击开始执行 还是在结束执行（不传是在结束执行，传递true是在开始执行）
btn.onclick = res;


/* 
函数的节流；
稀释函数执行的频率，并不是让函数只触发一次，在规定的时间之内触发一次，如果滑动超过了规定的时间就可以再次连续触发
鼠标的移动时间使用节流是比较合适的
鼠标的划入和划出使用防抖是比较合适的
*/
let res1 = _.throttle(fn, 1000)
window, onscroll = res1;


function func() {
    console.log(3);
}
let res2 = _.throttle(func, 1000, { trailing: false })
btn.onmousemove = res2


// window.onscroll = _.thirottle(fn, 500); 瀑布流可以这样