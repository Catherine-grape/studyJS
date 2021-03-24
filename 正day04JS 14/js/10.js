/* 
window 全局作用域
var a ==》10
var b ==》11
var c ==》12 ==》3
function text()
*/
var a=10,b=11,c=12;
function text(a){
//私有作用域：
//形参赋值：a=1 
//变量提升 b=2
    a=1;
    var b=2;
    c=3;//把window 下的c进行改值
}
text(10);
console.log(a);//10
console.log(b);//11
console.log(c);//3