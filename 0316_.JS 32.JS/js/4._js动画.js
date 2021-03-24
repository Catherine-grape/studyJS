// let box = document.getElementById('box');
// // box.style.left = '500px';
// let target = document.documentElement.clientWidth - box.offsetWidth;//小球移动的总距离
// let btn = document.getElementById('btn');
// let step = 5;
// btn.onclick = function () {
//     let timer = setInterval(() => {
//         //先获取一下当前小球的left值，再给left：累加上 step的值，再设置回去
//         // 当小球的left值大于等于target的时候，说明小球已经到达右边，就清除定时器
//         let left = parseFloat(box.style.left);
//         left += 5;
//         if (left >= target) {
//             // 如果left大于等于target了就把box的最大值设置为target的值，然后清空定时器，
//             // 最后return的作用是不让下班的谁left值的代码执行
//             box.style.left = target + "px";
//             clearInterval(timer);
//             return;
//         }
//         box.style.left = left + "px";
//         /* let a = box.offsetLeft;
//         if (target - a >= 0) {
//             box.style.left = left + step + "px";
//         }    */ 
//     }, 17);
    
// }
let target = document.documentElement.clientWidth - box.offsetWidth;
let btn = document.getElementById('btn');
btn.onclick = function () {
    $('#box').animate({
        left: target,
        opacity: 0,
        height:0
    }, 3000, 'linear', function () {
        console.log(1);
        box.style.backgroundColor = 'lightgreen';
    });
    //第一个参数是当前元素主要运动的目标值
    // 第二个参数是运动的总时间
    // 第三个参数是动画的效果
    // 第四个参数是动画执行完毕后的回调函数
}
    