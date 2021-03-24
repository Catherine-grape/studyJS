function Fn(){
    var n=100;
    this.A=function(){console.log("私有A")};
    this.B=function(){console.log("私有B")}
 }
 Fn.prototype.A=function(){console.log("公有A")};
 var f1=new Fn();
 var f2=new Fn();
 console.log(f1.A==f2.A);
 console.log(f1.__proto__.A==f2.__proto__.A);
 console.log(f1.__proto__.A==Fn.prototype.A)