/*
 css 的盒子模型
content+左右的padding+左右的border
*/
/* 
js盒子模型
client
clientWidth clientHeight clientTop clentLeft
offset
offsetWidth offsetHeight offsetLeft offsetTop offsetParant
scroll
scrollWidth scrollHeight scrollTop scrollLeft


getComputedStyle
*/

client//元素上的一个属性
clientWidth//当前元素可视区域的宽度 = 当前元素的width+左右的padding   console.log(box.clientWidth) =>120 Number类型
clientHeight//当前元素可视区域的高度 = 当前元素的height+上下padding
clientTop//当前元素的上边框（border）
clientLeft//当前元素的左边框（border）

let winW = document.documentElement.clientWidth||document.body.clientWidth;
let winH = document.documentElement.clientHeight || document.body.clientHeight;//获取当前屏幕可视区域的宽高


offset
offsetWidth//当前元素(盒子)的总宽度 clinetWidth+左右border
offsetHeight//


scroll
scrollWidth//
scrollHeight//当前元素的内容的真实高度 
// 1.  如果当前元素的内容没有溢出 那就等于clinentHeight 。
//2. 如果内容溢出了那就等于上padding + 内容的高度； 3.如果内容溢出，并且有overflow：hidden那scrollHeight等于上下padding+内容的高度
scrollTop//当前元素滚动条（纵向）卷曲的高度 document.documentElement.scrollTop=0 它的高度是移动了多少，不是滚动条上的，实际上滚动条是按照一定比例缩放的。在13个盒子模型里面 只有scrollTop、scrollLeft只有这两个既可以获取也可以设置（可读可写）  
scrollLeft//当前元素滚动条（横项）卷曲的宽度

//获取或者设置屏幕的js盒子属性
function screen(key, value) {
    if (value===undefined) {
        return document.documentElement[key] || document.body[key];
    } else {
        document.documentElement[key] = value
        document.body[key]=value
    }
    
}
screen('clientHeight');// 获取当前屏幕的可视区域的高度
screen('offsetHeight');// 获取当前元素的总高度
screen('scrollHeight');// 获取当前屏幕真实内容的高度
screen('scrollTop', 100);// 获取当前屏幕真实内容的高度


//位置
offsetLeft//当前盒子的左外边框距离父级参照物的左内边框距离(左偏移量)
offsetTop//当前盒子的上外边框距离父级参照物的上内边框长度(上偏移量)
offsetParent//当前元素的父级参照物  （与css定位有关系）

// 封装一个方法，获取当前元素距离body的父级参照物
console.log(document.body.offsetParent);//null body的父级参照物是null
function offset(ele) {
    let left = ele.offsetLeft;//上来先获取一下当前元素的左偏移量
    let top = ele.offsetTop;//获取一下当前元素的上偏移量
    let parent = ele.offsetParent;//获取当前元素的父级参照物
    while (parent !== document.body) {//直接parent  看一下当前元素的父级参照物是不是body，如果不是那就把父级参照物的左border和左偏移量累以及上border和上偏移量分别加给left和top
        left += (parent.clientLeft + parent.offsetLeft);
        // left+=parent.offsetLeft
        top += (parent.clientTop + parent.clientTop);
        parent = parent.offsetParent;
    }
    return {
        left,
        top
    }
}
offset(box);//返回值是两个 所以对象形式{left:xxx,top:xxx}
