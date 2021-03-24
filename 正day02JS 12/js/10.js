/* 
变量提升的特殊性：
1）在判断条件中，不管条件是是否成立，判断语句执行体里面的代码照常会进行变量提升
变量提升：var a
代码自上而下执行：

window 全局作用域：
变量提升：function fn只声明了一下（相当于和var是一样的了）代码自上而下的执行
*/

console.log(a);//undefined
if(1==2){
    var a=12;
}
console.log(a);//undefined



/* 
在判断语句中，在以前function 在变量提升的时候 声明和定义一起完成；
在新版本浏览器中：在变量提升的时候，只声明不定义
 */
console.log(fn);//有此变量，但是没值 undefined
if(1==2){
    function fn(){
        console.log(1)
    }
}
console.log(fn);//undefined