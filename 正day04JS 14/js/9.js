
/* 
window全局作用域
变量提升 
var n ==>0
function a()
var c==>a();
*/
var n=0;
function a(){
    /* 变量提升：
    var n==>10 11
     function b()
      */
    var n=10;
    function b(){
        n++;
        console.log(n);//11 12
    }
    b();
    return b;
}
var c=a();//等于 小b
c();//12
console.log(n);//0