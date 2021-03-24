/* 
在代码自上而下执行之前有一个阶段，变量提升：
变量提升：把带var 和function 都找到，
- var 只声明不定义
- function 声明和定义一起完成
*/

console.log(a);//undefined
fn();//变量提升是可以的
var a=2;
var b=a;
b=3;
console.log(b);
function fn(){
    console.log(1);
}
