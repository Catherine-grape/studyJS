/* 
window 全局作用域：
变量提升：
var i=10==>11==>12==>13==>14
var f=fn()
f(20);//n=20 20+11=31
fn()(20);n=20 20+12=32
fn()(30);n=20 30+13=43
f(30);n=30 30+14=44
*/

var i=10;
function fn(){

    return function(n){
        //n=20
        console.log(n+(++i));
    }
}
var f=fn();
f(20);
fn()(20);
fn()(30);
f(30);