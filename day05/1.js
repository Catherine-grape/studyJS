//函数  形参 真实传的是实参 
function fn(){
//传的实参的集合
    arguments 
    //return多少 函数执行的时候就是多少
    return 100;

    var res=3;
    //在里面打印的是里面的res ，外面的拿不到  私有作用域 保护里面的私有变量
    console.log(res);
}
//执行；的时候一一对应 给形参赋值
fn();

// 实名函数和匿名函数

// 匿名：函数表达式
var f1=function(){

}
f1();

// 给元素绑定一个点击事件  点击的时候函数里面执行
box.onclick=function(){

}
// 自执行函数
(function(){
console.log(1);
})
~function(){
console.log(1);
}
+function(){
console.log(1);
}
-function(){
console.log(1);
}

// es6的箭头函数 没有this argument  this目前选择是谁 谁就是this
var fn=function(x,y){
    return x+y;
}
var fn=(x,y)=>{
    return x+y;
}
var fn=x=>x;