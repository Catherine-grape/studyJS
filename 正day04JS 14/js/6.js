/* 
window 全局作用域
变量提升：
var a ==》12==》13
function fn
*/
console.log(a);//undefined
var a=12;
function fn(){
    //变量提升：无
    console.log(a);//全局的a 12
    a=13;//
}
fn();//
console.log(a);//13