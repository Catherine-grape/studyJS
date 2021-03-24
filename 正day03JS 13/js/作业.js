/* 
window 全局作用域
变量提升：num fn（函数）-->function fn(){
    console.log(1);
}-->f1-->f2-->f3-->f4
代码自上而下执行：

*/

console.log(num);//undefined
var num = 1;//num=1 赋值
console.log(num);//1
var num = 2;//num=2 重新赋值 改值
console.log(num);//2
fn();//fn 执行 变量提升后 f4()打印4
function fn(){//跳过 因为变量提升阶段走过了
    console.log(1);
}
function fn(){//跳过 因为变量提升阶段走过了
    console.log(2);   
}
fn();//fn 执行 变量提升后 f4()打印4
function fn(){//跳过 因为变量提升阶段走过了
    console.log(3);
}
fn=100;//fn=100; 把fn重新赋值 fn=f4不存在了 对象指针变了
function fn(){//跳过 因为变量提升阶段走过了
    console.log(4);   
}
fn();//在栈内存中运行 报错

function A(){
    var a=200;
    return function fn(x,y){
        a=300;
    }
    console.log(a);
}
A()();//第一个括号是return fn这个函数