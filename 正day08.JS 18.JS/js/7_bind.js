//实现bind 返回新的函数体
Function.prototype.mybind=function(ctx,...arg){
    // this 就是 f2
    let _this=this;//_this就是f2
return function(...arg2){
   return _this.call(ctx,...arg,...arg2)
}
}
let f4 = f2.mybind(obj4,1,2,3,4,666);
// 只有当f4执行的时候 f2才会执行 f2.mybind(obj4,1,2,3,4,666);是用法
// f4执行的时候传递的参数 其实就是给的小函数
//我们编写的这个 mybind 没有考虑通过 new执行
// 原生的bind当new执行的时候 里面的this不再是绑定的obj4，而是对应函数的一个实例
f4(777,888,999)



// mdn的实现
if (!Function.prototype.bind) {
    Function.prototype.bind = function(ctx) {
      if (typeof this !== 'function') {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        //提升代码的健壮性
        //throw new Error 抛出个错误 TypeError是类型错误
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      }
  
      var aArgs   = Array.prototype.slice.call(arguments, 1),//arguments.slice（1）
    //   从索引为1的为止开始赋值 也就是把1，2，3，4，666放到一个数组当中
    //aArgs 其实就是我们上面写的那个arg
          fToBind = this,//就是我们的那个_this 也就是f2
          fNOP    = function() {},//临时函数
          fBound  = function() {
              //fBound 就是我们的f4
            // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
            //this instanceof fBound? this: ctx 这判断是为了处理 通过new执行的 f4
            // this instanceof fBound 这个条件若是成立 则证明 是通过new执行的f4，this是f4的一个实例。
            //这个函数中的this是fBound（f4）的执行主体
            //什么时候才会是f4的一个实例？只有当new执行f4的时候
            return fToBind.apply(this instanceof fBound
                   ? this
                   : ctx,
                   // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
                   aArgs.concat(Array.prototype.slice.call(arguments)));
          };
  
      // 维护原型关系 为了new准备了下面的以及判断条件
      if (this.prototype) {
        // Function.prototype doesn't have a prototype property
        //让临时函数的原型指向 f2的原型
        // fToBind = this,//就是我们的那个_this 也就是f2
        fNOP.prototype = this.prototype; 
      }
      // 下行的代码使fBound.prototype是fNOP的实例,因此
      // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
      fBound.prototype = new fNOP();
  
      return fBound;
    };
  }
  
