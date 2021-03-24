/* 
window 全局作用域：
var foo==》1
function bar
*/
var foo=1;
function bar(){
    //变量提升：var foo
    //console.log（foo）;undefined if(!undefined)
    if(!foo){
        var foo=10;//foo==>10
    }
    console.log(foo);//10
}
bar();