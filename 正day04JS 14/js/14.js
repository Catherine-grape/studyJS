/* 
window 全局作用域：
变量提升：
var a==>9==>0==》1==》0==》1==》2
function fn()
var f=fn();==》function （b）
 */

 var a=9;
 function fn(){
     //私有作用域 a是全局的
     a=0;
     return function(b){
         //形参赋值b=5   5+ 0=5//5+0=5//5+1=6
         return b+a++;
     }
 }
 var f=fn();
 console.log(f(5));//5
 console.log(fn()(5));//5
 console.log(f(5));//6
 console.log(a);//2