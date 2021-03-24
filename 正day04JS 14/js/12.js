/* 
window 全局作用域：
变量提升：
var a==>4
function b()
*/
var  a=4;
function b(x,y,a){
    /* 
    私有作用域：
    形参赋值：x=1
    y=2
    a=3==>10
    */
    console.log(a);//3
    arguments[2]=10;
    console.log(a);//10
}
a=b(1,2,3);//返回结果给到a b这个函数没有返回值
console.log(a);//undefined