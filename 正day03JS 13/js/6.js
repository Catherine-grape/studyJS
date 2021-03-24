/* 
widow 全局作用域：
变量提升：
 var a =12
 var b =13
 var c =14===》20
 function fn
 代码自上而下执行：
 fn(a);执行的时候会形成私有作用域
 1、形参赋值：a =12；a是私有变量===》20
 2、变量提升：
 var b；// 私有变量===》20
 3，代码自上而下执行：

*/
var a=12,b=13,c=14;
function fn(a){
    console.log(a,b,c);//12 undefined c不是私有的 会向上级作用域查找，window下的c就是14
    var b=c=a=20;//c是全局的
    console.log(a,b,c);//20 20 20
}
fn(a);
console.log(a,b,c);//12 13 20