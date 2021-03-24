/* 
函数：封装一个功能性的代码
函数在存储的时候，存的是死字符串，使用的时候变成活的
形参：形式上的参数
实参：实际在函数执行的时候，真实传入的参数 与形参是一一对应
---》arguments:可以当成一个对象 有索引 有长度
接收参数的另种形式：
形参
arguments

对象在堆内存中 是键值对

函数在堆内存中是一堆死的字符串，每执行一次fn的时候 都会开一个新的栈，执行后会直接销毁
 */

 //
//  function fn(name,age){
//      console.log(name,age)
//  }
// // 函数的执行
//  fn("lili",10);

// arguments:在函数里面通过输入arguments就能得到真实传参的集合，
//想得到传了多少个参数：arguments.length

 function fn(name,age){
    console.log(arguments.length);
    //获取对应的实参
    console.log(arguments[0])
    console.log(arguments[1])
}
// 函数的执行
fn("lili",10);


/*  函数里面的变量  函数里面的形参是私有的，和里面的变量也是私有的 
函数在执行的时候会形成一个私有的作用域，保护里面的私有变量不受外界（全局）的干扰*/
function fn1(){
    //私有的
    var res=2;
    console.log(res);
}
fn1();  //===》2

console.log(res);//===>报错

//函数里面如果没有写return，函数执行的结果就是undefined
//函数执行形成私有作用域，里面的变量在外面访问不到，如果想要访问到，可以通过return 
function fn2(){
    //声明一个变量，通过return 得到 res的返回值
    var res=3;
    return res;
}
//在外面通过res2去执行的时候就可以得到 里面的变量
var res2=fn2();