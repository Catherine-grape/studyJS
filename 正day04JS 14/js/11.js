/* 
window 全局作用域：
变量提升：var a
*/

if(!("a" in window)){
    var a=1;
}
console.log(a);//undefined