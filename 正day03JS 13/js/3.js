/* 
360面试题
window 作用域：
变量提升：无
代码自上而下执行；

*/
f=function(){
    return true;
}
g=function(){
    return false;
};
//自执行函数在执行的时候，形成了一个私有作用域
~function(){
    //变量提升：function g 只声明不定义
    //console.log（g);undefined
    //undefined();报错 g is not a function
    if(g()&&[]==![]){
        f=function(){return false;};
        //g只声明未定义 没有值 所以是undefined
        function g(){
            return true;
        }
    }
}();
console.log(f());
console.log(g());