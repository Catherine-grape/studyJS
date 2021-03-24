/* 
变量提升：
var obj
*/

console.log(obj.f1);//Cannot read property'f1' of undefined f1前面的找不到

var obj={
    f1:function(){
        console.log(1);
    }
}