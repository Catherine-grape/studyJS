/* 
es6 语法：
1. 没有变量提升
2. 阻断了与window的关系
3. 变量不能重名
4. 暂时性死区"TOZ"
*/

//console.log(a);//报错 a is not defined
//let a=3;//没有变量提升  "a" in window false 
/* function a(){
    console.log(1);
} *///报错Identifier 'a' has already been declared a已经声明过了

/* var b=3;
function b(){

} */
//概念性的 暂时性死区 let之前的都是暂时性死区

//console.log(typeof a);//undefined
/* console.log(typeof a);//a is not defined
at
let a=3; */

//虽然es6没有变量提升，但是在代码执行之前，会有一个词法检测，直接就会报错
//遇到重名直接报错Identifier 'a' has already been declared
let a=3;
console.log(a);//还没走这行就报错了
function a(){

}