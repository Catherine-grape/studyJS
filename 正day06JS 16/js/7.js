function Fn(){
    this.name="li";
}

var f1=new Fn();
f1.hasOwnProperty("name");

/* 
hasPublicProperty
*/

Fn.prototype.write=function(){
    alert(2);
}
Fn.prototype.hasPublicProperty=function(attr){
    //this
    return attr in this&&!this.hasOwnProperty(attr)?true:false;
}
var f1=new Fn();
var f2=new Fn();
//f1.hasOwnProperty("name");

f1.hasPublicProperty("write");
f2.hasPublicProperty("write");