function fn(){
    this.x=100;
    this.y=100;
  }
  fn.prototype.getX=function(){
  }
  var f1=new fn();
  console.log(f1);//x:100,y:100
  console.log(fn.prototype)//getX 第一层能看见的都是私有的
  console.log(f1.hasOwnProperty("x"));//true
  console.log(f1.hasOwnProperty("getX"));//false
  console.log(fn.prototype.hasOwnProperty("getX"));//true
  console.log(fn.prototype.hasOwnProperty("getY"));//false

  //in 在不在 在调用的时候能不能调到那个值 
  //用法："属性名"in 对象 只要能通过对象调用到这个属性，结果就是ture

console.log  ("x" in f1);//ture
console.log  ("getX" in f1);//ture
console.log  ("qq" in f1);//false  Object.prototype.qq=123 //ture