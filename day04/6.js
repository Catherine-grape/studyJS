//实名函数和匿名函数
//fn 实名
/* function fn(){

} */

//匿名函数表达式
var fn=function (){

}
/* box.onclick=function(){
}
 */

 //这样有语法错误
/*  function(){

 }();
 */
//自执行函数  上来就执行了 ()~ 用的多一些 都是自执行记住那个都可以

(function(){
    console.log(1);
})();
~function(){
    console.log(1);
}();
+function(){
    console.log(1);
}();
-function(){
    console.log(1);
}();
!function(){
    console.log(1);
}();