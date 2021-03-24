/* 
window 全局作用域：
var a ==>12
function fn
*/

console.log(a);//undefined
var a = 12;
function fn() {
    /*     私有作用域：
            变量提升： var a==》13
     */
    console.log(a);//undefined
    var a = 13;
}
fn();
console.log(a);//12


