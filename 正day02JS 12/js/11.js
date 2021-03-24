/* 
window 全局作用域：
变量提升阶段：var a
代码自上而下执行：
在全局作用域下var a 就相当于给 window添加了一个属性“a”
*/
console.log(a);//undefined 有了没有值
if(a in window){
    var a=100;//给a赋值100 a=100；
}
console.log(a);//100

