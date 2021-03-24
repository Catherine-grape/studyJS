/* 
原型重定向：自己的类可以重定向
*/

function Fn(){
    this.x=100;
  }
  Fn.prototype.getX=function(){
    return this.x;
  }
  var f1=new Fn();
  Fn.prototype={
     //consturctor:Fn,
     getY:function(){
        return this.x
     }
  };
  var f2=new Fn();
  console.log(f1.getX());//100
  console.log(f2.getX()); // 报错
  console.log(f1.constructor); //Fn
  console.log(f2.constructor); // Object
  
  // 内置类的原型地址是不允许被修改的,但是可以往里面新增方法
  Array.prototype={};
  var ary=[1,2,3];
  ary.push(4);
  console.log(ary);//==>[1,2,3,4]
  
  Array.prototype.myFn=function(){
      console.log(1);
  }
  var ary=[1,2,3];
  ary.myFn()
  