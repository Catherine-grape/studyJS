let box = document.getElementById('box');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let target = document.documentElement.clientWidth - box.offsetWidth;
let step = 15;


// jq实现左右运动的动画
/* btn1.onclick = function () {
        $('#box').stop().animate({
            left: target
        }, 3000, 'linear')
}
btn2.onclick = function () {
    console.log(2);
    $('#box').stop().animate({
        left: 0
    }, 3000, 'linear')
}  */

// 利用原生实现左右运动的动画
//let timer = null;
/* btn1.onclick = function () {
    clearInterval(timer);
     timer = setInterval(() => {
        let left = parseFloat(box.style.left);
        left += step;
        if (left >= target) {
            box.style.left = target + 'px'
            clearInterval(timer);
            return
        }
        box.style.left=left+'px'
    },17)
}
btn2.onclick = function () {
    clearInterval(timer);
    timer = setInterval(() => {
        let left = parseFloat(box.style.left);
        left -= step;
        if (left <= 0) {
            box.style.left = 0 + 'px';
            clearInterval(timer);
            return
        }
        box.style.left = left + 'px'
    }, 17);
    
}
 */



/* btn1.onclick = function () {
    function fn() {
        let left = parseFloat(box.style.left);
        left += step;
        if (left >= target) {
            box.style.left = target + 'px'
            return
        }
        box.style.left = left + 'px';
        window.requestAnimationFrame(fn)
    }
    window.requestAnimationFrame(fn)//他是h5上新增的创建动画的一个api，他的好处就是可以根据电脑的执行频率去确定动画函数的执行时机
    // 1.requestAnimationFrame最大的优势是由系统来决定回调函数的执行时机
    // 2.requestAnimationFrame则完全不同，当页面处理未激活的状态下，该页面的屏幕刷新任务也会被系统暂停，因此跟着系统步伐走的requestAnimationFrame也会停止渲染，当页面被激活时，动画就从上次停留的地方继续执行，有效节省了CPU开销。
}
btn2.onclick = function () {
    function fn() {
        let left = parseFloat(box.style.left);
        left -= step;
        if (left <= 0) {
            box.style.left = 0 + 'px';
            return
        }
        box.style.left = left + 'px'
        window.requestAnimationFrame(fn)
    }
    window.requestAnimationFrame(fn)
}
 */



// 利用原生实现固定事件的动画
let timer = null;
let duration = 2000;
let time = 0;
step = target / (duration / 17);//总长度/需要执行的总次数==每一步主要移动的距离
btn1.onclick = function () {
    timer = setInterval(() => {
        time += 17;
        let left = parseFloat(box.style.left);
        left += step
        if (time >= duration) {
            box.style.left = target + "px"
            clearInterval(timer);
            return
        }
        box.style.left = left + 'px'
    }, 17)
}