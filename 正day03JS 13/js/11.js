/* 
堆内存释放
 */

var obj={name:"li",age:45};
var obj2=obj;
obj=null;
obj2=null;

/* 
1、栈内存的释放问题：
全局作用域：当你把浏览器的窗口关闭，整个作用域就销毁了
2、一般情况下，函数执行完毕之后，只要不是被占用的，在浏览器空闲的时候就销毁了
*/
//2、不销毁的作用域：当函数执行的时候，里面有引用数据类型的值被外面的变量占用就不销毁 不关闭窗口的情况下
function fn(){
    var num=3;
    return function(){
        console.log(num);
    }
}
var f=fn();

var ary=[];
function fn(){
    var num=2;
    ary=function(){//3、虽然说没有return，但是里面的函数被外界的ary占用也形成了不销毁的作用域
        console.log(num);
    }
}
var f=fn();//f=undefined


/* 
4、不立即销毁
 */

 function fn(x){
     return function(y){
         return x+y;
     }
 }
 fn(1)(2);