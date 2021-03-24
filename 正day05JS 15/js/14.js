/* 
通过this添加的属性都是实例的私有属性
*/

function Fn(){
    this.name="li";
    
}
//实例公有属性，往他的原型上添加 
Fn.prototype.write=function(){
    alert("write")
}

var f1=new Fn();
var f2=new Fn();

f1.write==f2.write;//true