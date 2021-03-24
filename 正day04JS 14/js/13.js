/* 
逻辑或 var a=1｜｜2；当第一个值是true 那a就是第一个值，如果第一个值是false 那就是第二个值
逻辑且 var a=1&&2;当第一个值为true，那a就是第二个值，如果第一个值为false 那他就是第一个值

window 全局作用域：
变量提升：var foo=="hello"
*/

var foo="hello";
(function(foo){
    /*
    形参赋值：foo=“hello”//声明过了
    变量提升：
     */
    console.log(foo);//"hello"
    var foo=foo||"word";//foo="hello"||"word";foo="hello"
    console.log(foo);//"hello"
})(foo);
console.log(foo);//"hello"

