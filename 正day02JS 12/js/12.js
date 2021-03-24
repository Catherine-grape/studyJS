/* 
window 全局作用域：
变量提升阶段：function fn （在新版本浏览器中只声明不定义）
代码自上而下执行：

*/

console.log(fn);//undefined
if(1==1){
    //if 判断的第二个特殊性：一旦这个条件成立，会把{}它当成一个私有作用域，再进行变量提升：对于function来说立马进行赋值
    console.log(fn);//打印出fn这个函数
    function fn(){
        console.log("ok");
    }
}
console.log(fn);//fn这个函数