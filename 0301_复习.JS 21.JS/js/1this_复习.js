/* 
this的指向
1.自执行函数里面的this指向window
2.构造函数的this是指当前正在创建的实例
3.在全局下是window
4.函数里的this，看函数执行的时候，前面有没有点，如果有点，那点前面是谁this就是谁；如果没有点那函数里面的this就是window（仅仅针对于普通函数）
5.箭头函数没有this，如果箭头函数里使用this，那就会往上一级作用域查找
6.给元素绑定点击事件，那绑定的方法里的this就是当前被绑定的元素本身
7.原型上的方法里的this一般情况下就是当前实例
8.回调函数里面的this，一般情况下是window
*/
/* function ss() {
    console.log(this);//str 这个变量
}
String.prototype.ss = ss;
let str = '111';
//str.ss();//this-->当前实例str
String.prototype.ss(); *///String.prototype this-->原型 成员访问。


//-----------------------------
/* function fn(){
    console.log(this);
}
function fns(){
    fn();//win
}
fns();

(function () {
    console.log(this);
}());//自己执行自己 所以只能是window
(function () {
    console.log(this);
})(); */
//-----------------------------------
/* let ary = [100, 200, 300]
ary.forEach(function (item, index) {
    console.log(item, index, this);//window item每一项 index索引
 }); *///把函数当成一个参数
//forEach是一个高级的for循环函数，有多少项循环多少次

/* function ss(fn) {//af1
    console.log(fn);//af1
    fn();//fn就是回调函数 
}
ss(function () {
    console.log(this);//window
 }) *///af1

//  -----------------------------
/* function fn(params) {//af1
    console.log(this, 53);// obj={fn:fn}
    params();//下面那个小函数执行
}
let obj = {
    fn: fn
};
obj.fn(function () {//af1
    console.log(this, 59);//window
}) */
// -----------------------
function fn(ss) {
    let obj = { ss: ss };
    obj.ss();//obj
}
fn(function () {
    console.log(this);
});