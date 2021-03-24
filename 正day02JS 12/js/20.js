console.log(num);//undefined
var num = 1;
console.log(num);//1
var num = 2;
console.log(num);//2
fn();//4
function fn(){
    console.log(1);
}
function fn(){
    console.log(2);   
}
fn();//4
function fn(){
    console.log(3);
}
fn=100;//fn=100;
function fn(){
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