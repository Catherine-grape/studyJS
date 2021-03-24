// es3和es5来创建一个类
//普通函数创造的类
function Fn(a, b) {
    this.x = a;
    this.y = b;//给当前实例增加私有属性
    let s = 100;
}
Fn.prototype.ss = 100;//给当前Fn的原型上增加属性
Fn.age = 800;//把类当作对象增加属性
let f1 = new Fn(1, 2);//默认返回当前this
let f2 = Fn(3, 4);//当作普通函数执行 没有return 默认undefined
// -------------------------
// es6的class创建的自定义类 更加严谨这个Fn就是一个类不能作为普通函数执行
// 只适用自定义类
class Fn {//class Fn 这个类
    constructor() { //构造函数
        // this-->就是当前正在创建的实例
        this.x = a;
        this.y = b;
        // this.ss=100
    };
    // Fn.prototype.get=function(){}
    get() {//给当前的Fn类的原型上增加方法get

    }
    ss = 100;//是给当前实例增加私有属性
    static m = 10;//把当前类当作对象增加键值对 必须有static 是固定的
}
let f1 = new Fn(1, 2);
console.log(f1);
let f2 = Fn();//报错，因为拿class创建的类不能当作普通函数执行
let obj = {
    sum: function () { },
    sum() { }//为上面的简写。两个是等价的
}
// 给原型上新增方法还是要Fn.prototype.get=function(){}这样写