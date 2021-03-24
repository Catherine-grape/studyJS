// 捕获阶段 目标阶段 冒泡阶段
// 当用户触发点击事件之后，会先从最外面往里进行捕获
// addEventListener方法的第三个参数，如果是true，那当前绑定的函数就在捕获阶段执行，如果是false，那绑定的方法就在冒泡阶段执行

let outer = document.getElementById('outer'), inter = document.getElementById('inter'), center = document.getElementById('center');
// 任何事件的都是这么执行的
// 当元素的某个事件被触发的时候，首先执行的就是捕获阶段（从最外往里依次触发每一个元素身上的捕获阶段的方法）
// 再次执行的就是目标阶段（就是把目标元素身上的方法依次执行）  存疑？[在目标阶段的方法会按照函数绑定的顺序去执行]
// 再次执行冒泡阶段（从里往外依次触发每一个元素身上的冒泡阶段的方法）
outer.addEventListener('click', function (e) {
    console.log('outer捕获',e.target);
    
}, true);//捕获阶段
inter.addEventListener('click', function (e) {
    console.log('inter捕获',e.target);
    
}, true)
// center.addEventListener('click', function () {
//     console.log('center捕获',e.target);
// }, true)
//点谁 谁是目标

outer.addEventListener('click', function (e) {
    console.log('outer冒泡',e.target);
}, false);//冒泡阶段
inter.addEventListener('click', function (e) {
    console.log('inter冒泡',e.target);
}, false)
center.addEventListener('click', function (e) {
    console.log('center冒泡', e.target);
    e.cancelBubble = true;//放在冒泡身上的时候会阻止自己之外的冒泡
}, false)

center.addEventListener('click', function (e) {
    console.log('center捕获', e.target);
    e.cancelBubble=true;//放在捕获身上的时候 连自己的冒泡都阻止了
}, true)

// DOM0级事件绑定默认是在冒泡阶段执行（不能控制方法在捕获阶段执行）

// 冒泡传播机制 是可以被阻止的，
// target事件源(谁是目标「阶段」谁就是事件源) 就是当前用户点击的那个元素
// e.cancelBubble=true;//阻止冒泡阶段的事件触发
// e.stopPropagation();阻止冒泡阶段的事件触发


//  e.returnValue = false// 阻止事件的默认行为 
//e.preventDefault();//禁止右击 弹出小框    鼠标右击弹出小框也是事件的默认行为，一般情况咱们都给他禁止




// 当元素的事件被触发的时候，先从外往里执行捕获阶段的函数，直到找到目标位置，再去触发目标元素的函数（方法），最后在从里往外执行冒泡阶段的函数（方法）