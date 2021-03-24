/* 
全局变量：在全局作用域下声明的变量
- 在私有作用域下声明的变量：var function
- 形参
*/

/* 
x,y 和a都是私有变量
*/
function fn(x,y){
    var  a=100;
}
fn(1,2);