/* function fn1() { console.log(1) }
function fn2() { console.log(2) }
fn1.call(fn2);
fn1.call.call(fn2);
Function.prototype.call(fn1);
Function.prototype.call.call(fn1);
Function.prototype.call.call.call(fn1); */

// call的原理 
// 不用call 写原生的就是以键值对的方式
let obj = {
    ss: 100
};
function fn() {
    console.log(this);
    return 100;
}
/* obj.fn = fn;
obj.fn();
delete obj.fn; */
/* function myCall(context) {
    // 让fn执行，并且在执行的时候把fn的this指向obj
    // this-->fn
    // context--> obj 形参赋值
    // 用变量去代替之前的死值
    context.fn = this;
    context.fn();
    delete context.fn;
}
Function.prototype.myCall = myCall;
fn.myCall(obj);
fn1.myCall(obj); */

function myCall(context, ...arg) {
    // 让fn执行，并且在执行的时候把fn的this指向obj
    // this-->fn
    // context--> obj 形参赋值
    // 用变量去代替之前的死值
    // 考虑到return 
    console.log(ary);//[1,2]
    context.fn = this;
    //考虑到实参用到es6的...
    let res = context.fn(...arg);//1,2
    delete context.fn;
    return res;//当前的return是myCall函数执行的return
}
Function.prototype.myCall = myCall;
console.log(fn.myCall(obj, 1, 2));
fn1.myCall(obj);


// 不传参
function myCall(context, ...arg) {
    // 在myCall函数内部，context就代表了fn的this指向，或者说context是谁，fn的this就指向谁
    context = context || window;//如果当前的context是undefined或者null，把context的值改为window
    //不支持基本数据类型值

    context.fn = this;
    let res = context.fn(...arg);//1,2
    delete context.fn;
    return res;//当前的return是myCall函数执行的return
}
Function.prototype.myCall = myCall;
console.log(fn.myCall());
fn1.myCall();



// -------------
// es6...
function ss(...ary) {//收缩运算符，把所有的实参以数组的形式
    console.log(arguments);//可以拿到左右的实参 
    console.log(ary);//[1,2,3]
    console.log(...ary);//1,2,3展开运算符/拓展运算符
    // 就看在谁的前面写了，如果...用到数组前面，就是把数组展开变成多个值
    // 如果用到形参的地方，就是把所有的实参收集到一个数组里面
}
ss(1, 2, 3);
function ss(a, ...ary) {//实参1用形参a接收，剩下的所有实参用ary以数组的形式接收
    console.log(a, ary);
}
ss(1, 2, 3);