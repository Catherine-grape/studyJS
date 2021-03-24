/* 
this 关键字
函数执行的主体
1. 在全局作用域下，this指的就是window
平时写的 就是非严格模式
"use strict"加上这个就是严格模式
2. 函数执行的时候，看它前面有没有点，如果有点，前面是谁，函数里面的this就是谁，如果没有，在非严格模式下就是window，在严格模式下就是undefined
3. 给元素绑定事件，当触发此事件，函数里面的this就是你绑定的元素
4. 在自执行函数中，非严格模式下，this指的就是window，严格模式下是undefined
5. 在回调函数中,(把一个函数当成一个参数（实参传递给另一个函数(要执行的函数）就是回调函数)this 指的就是window 无论是否严格模式下。
6. 在构造函数中的this指的就是当前类的实例
7. this还可以通过 call、bind、apply去更改指向
*/
/* "use strict"
console.log(this); */


/* var name="dav"
var obj={
    name:"li",
    fn:fn
}
function fn(){
    //this obj
    console.log(this.name);//"dav"
}
fn();
obj.fn();//"li"

 */


 (function(){
console.log(this);
 })();
//setTimeout 是函数 里面放了一个function为参数
 setTimeout(function(){console.log(this);},100);
 
