//call、apply、bind

let obj = {
    ss:100
}

function fn(a,b) {
    console.log(this,a,b);
}
//fn();//window
// obj.fn = fn;//新增键值对的方式
// obj.fn();//让fn这个函数里面的this指向obj 输出的时候还在引用类型打开就会更新不打开不更新
// delete obj.fn;//删掉了

//fn.call(obj);//在call执行的时候，让fn在call内部执行，并且把fn的this指向，指向了call的第一个实参。call原生代码 c写的 js整个是c写的最底层的语言 最标准的。
// 从call的第二个实参开始，都是给fn传递的参数

// 在非严格模式下
// 如果call执行的时候，不传递实参，或者传递undefined、null，那fn执行的时候，this统统指向window

//fn.call();//window

// 严格模式下
// 如果call执行的时候，不传递实参，或者传递undefined this是undefined 如果传递是null，那fn执行的时候，this是null

/* "use strict"
function fn(a,b) {
    console.log(this,a,b);
}
fn.call() */

// -------------------------------
// apply,只能传两个参 第二个参数只能是数组
function fn(a,b) {
    console.log(this, a, b);
   
}
let obj = {
    ss:100
}
fn.apply(obj, [1, 2, 3]);
fn.call(obj, 1, 2, 3);// 一样的

// -----------------------------
// bind是预处理this，它并不会让fn函数马上执行，而是bind执行的时候返回一个新函数;
let res = fn.bind(obj);//bind执行了，作用域没销毁
res(1, 2);//当res执行的时候，在res函数内部让fn执行，并且改变fn的this指向
res(3, 4);
let a = {
    ss: 100
};
// 当点击的时候，让this输出对象
/* button.onclick = fucntion(){
    console.log(this);
} */
function ss() {
    console.log(this);
}
button.onclick = ss.call(a);//是把ss.call(a)的返回值（undefined）赋值给了点击事件
button.onclick = ss.bind(a);//这样就可以了，没有让ss立即处理，而是每次点击的时候 执行这个函数把里面的this指向a 赋值给button的点击事件
// bind只是返回一个新的函数（并不会让ss马上执行）
// 以后这个新函数手动执行的时候，会让ss执行，并且把ss的this指向bind的第一个参数
/* function fn() {
    return 100
}
let b = { s: 100 };
fn()//100
fn.call(b);//100 */
//bind源码一部分
function bind() {
    return function () {
        // 在此函数内部改变this 的函数执行
    }
}
let res = bind();
res();



function fn(a, b) {
    console.log(this, a, b, 168);
}
let a = {};
let res = fn.bind(a,3,4);
res(1,2);//res 是一个新函数，res执行 bind才会执行返回一个新函数。 fn返回什么 新函数就返回什么 没有return就是undefined