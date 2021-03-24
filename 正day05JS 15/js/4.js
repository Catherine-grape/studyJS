/* 
window 全局作用域：
变量提升：
var num =10==》60==>65
var obj ={num:20===>30,fn:f}
var fn==》f的小函数
*/


var num=10;
var obj={num:20};
obj.fn=(function(num){
    //私有作用域 :
    //形参赋值:num=20==》21==>22==>23
    //window.num=num*3=20*3=60
   this.num=num*3;
   num++;
   return function(n){
       //私有作用域：
       //形参赋值：n=5；//n=10
       this.num+=n;//window.num+=5; window.num=window.num+5=65//obj.num+=n==>obj.num=obj.num+20=30
       num++;
       console.log(num);//22//23
   }
})(obj.num);//20
var fn=obj.fn;
fn(5);
obj.fn(10);
console.log(num,obj.num)//65 30