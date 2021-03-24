
/* 
如果手动return：
- 基本数据类型的值，不会造成影响，还是默认的
- 引用数据类型的值，会造成影响，手动的替换了默认的
- 只写了return后面没跟值，不会造成影响

执行构造函数的时候，只要return了一个引用数据类型的值，就会替换默认的，所以在构造函数中，不能乱用return（谨慎使用，因为默认会返回一个）
*/

function Fn(){
    this.name="li";
    this.age=10;
    //return 100;//不会造成影响
    //return {};//{}
    return ;//不会造成影响
} 

var f1=new Fn();
var f2=new Fn();