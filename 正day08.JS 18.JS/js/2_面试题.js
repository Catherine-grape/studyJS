//老师写法 模拟实现 new
function C2(name,age) { 
    this.name = name;
    this.age=age;
}

myNew(C2,'cxk', '18')// c2=new C2(name, 'cxk', '18');c2.__proto__===>C2.prototype
function myNew(...arg) {
    var obj = {};//就是要返回的那个产生的实例 字面量的形式
  var Constructor=arg.shift();//C2  arg:['cxk', '18']

    obj.__proto__ = Constructor.prototype;
  //把实例的__proto__指向 C2的原型
   const res = Constructor.apply(obj, arg);
   //Constructor.apply(obj,arg);
  //  C2.apply（obj，['cxk', '18']）
  //  让C2执行把'cxk', '18'传给C2 并且把C2中的this改成obj，然后获取C2的执行结果
  //C2('cxk', '18')这里边的this是obj

   // return  obj;
    return typeof res === "object" ? res : obj;
// 若返回值是一个引用数据类型则返回这个引用类型 若不是就返回对应的实例
  }



myNew(C2,'cxk', '18')// new C2(name, 'cxk', '18')
function myNew() {
    const obj = new Object();
    //const Constructor=arguments.shift  构造函数
    const Constructor = [].shift.call(arguments);//const Constructor=arguments[0];
    //    ({}).toString.call(xxx)
    //通过 数组找到 shift方法 然后把shift中的this替换成arguments
    //实现的效果就是 删除arguments中的第一项 并且把删除的这一项赋值给变量Constructor
  
    obj.__proto__ = Constructor.prototype;
  
    const ret = Constructor.apply(obj, arguments);
  
    return typeof ret === "object" ? ret : obj;
  }
  
  //实现instanceOf
  // 模拟 instanceof [].instanceof.Array:>instance_of([],Array)
  //[].instanceof Object ：true
  //[].instanceof Number：false
function instance_of(L, R) {
    //L 表示左表达式，R 表示右表达式
    //[]       Array
    var O = R.prototype; // 取 R 的显示原型     获取了Array的原型
    L = L.__proto__; // 取 L 的隐式原型 获取[]的__proto__并且赋值给L这个变量
    while (true) {
      if (L === null){
          //L 什么时候才会是null？？基类的__proto__才会是null
          //若都走到了基类上 都没有满足条件 证明这个实例不属于这个类
          return false;
      } 
      if (O === L)  {
        // 若 实例的__proto__和类的原型相等 证明这个实例在这条原型链上：
        return true;
    }
    //若以上两个条件都没有满足，则
    //instanceof [].instanceof.Number:>instance_of([],Number)
      L = L.__proto__;
    }
  }
  