/* 
var n=2==》4==》8
var obj ={
    n:3==>6
    fn:f
}
var fn==》obj.fn==>f
*/
var n=2;
var obj={
    //对象
    n:3,
    fn:(function(n){
        //var n 形参赋值 n=2==>5==>6==>7
      n+=2;//4
      this.n+=2;//window.n=2
      var n=5;
      return function (m){
          //m=3 
         this.n*=2;//window.n*=2==>8 obj.n*=2
         console.log(m+(++n));//3+6=9/3+7=10
      }
    })(n)//变量
};
var fn=obj.fn;
fn(3);
obj.fn(3);
console.log(n,obj.n)//8  6