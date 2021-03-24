/* 
当一个函数执行的时候，形成了不销毁的作用域就是闭包,  return一个引用数据类型
作用：
- 可以保护里面的私有变量不受外界的干扰，(不污染全局变量)
- 保存

*/
var a=10;
function fn(){
    var a=3;
    return function(){

    }
}
var res=fn();