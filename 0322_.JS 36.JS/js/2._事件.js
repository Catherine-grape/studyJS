// 事件的绑定  DOM0级事件绑定
            // - 绑定的时候就是把元素对象深山的对应的事件名进行赋值
            // - 元素的同一个事件类型，只能绑定一个方法
            // - 移除事件绑定的时候直接赋值null
            // - DOM0级绑定只能是在冒泡阶段绑定方法
// DOM2级事件绑定
/* 
- ele.addEventListener//增加事件监听('事件类型',方法，布尔值)默认捕获
    - true 就是给捕获阶段绑定方法
    - false 就是给冒泡阶段绑定方法
    - 没写第三个参数，默认给冒泡阶段绑定方法
    - 元素的同一个事件类型可以绑定多个不同的方法
事件的传播机制
当你触发元素上的某一个事件的时候，会先执行捕获阶段（从外往里把每一个元素身上捕获阶段的方法一次执行）：然后就是目标阶段（先绑定谁就先执行谁，与捕获、冒泡没有关系），最后再执行冒泡阶段（从里往外依次触发元素冒泡阶段的方法）
*/

// window-->document-->html-->body-->element...
// ...-->body-->html-->document-->window

// onmouseover  onmouseout [有冒泡]
// onmouseenter  onmouseleave [无冒泡]

/* outer.onmouseover = function () {
    console.log('outer','onmouseover');
}
inter.onmouseover = function () {
    console.log('inter','onmouseover');
}
center.onmouseover = function () {
    console.log('center','onmouseover');
}
outer.onmouseout = function () {
    console.log('outer','onmouseout');
}
inter.onmouseout = function () {
    console.log('inter','onmouseout');
}
center.onmouseout = function () {
    console.log('center','onmouseout');
} */


outer.onmouseenter = function () {
    console.log('outer','onmouseenter');
}
inter.onmouseenter = function () {
    console.log('inter','onmouseenter');
}
center.onmouseenter = function () {
    console.log('center','onmouseenter');
}
outer.onmouseleave = function () {
    console.log('outer','onmouseleave');
}
inter.onmouseleave = function () {
    console.log('inter','onmouseleave');
}
center.onmouseleave = function () {
    console.log('center','onmouseleave');
}


// 事件对象：当元素的某一个事件类型对应的方法执行的时候，浏览器会把当前的一些事件信息传递给函数的第一个实参
//  e.preventDefault();
// e.returnValue=false    //return false 阻止默认行为

// e.cancelBubble=true;阻止冒泡传播
// e.stopPropagation();
