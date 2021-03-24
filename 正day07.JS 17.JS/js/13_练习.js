function Fn() {
    let a = 1;
    this.a = a;
}
Fn.prototype.say = function () {
    this.a = 2;
}
Fn.prototype = new Fn;//赋值表达式，把右边的执行结果赋值给左边  引用数据类型改的都是指向
let f1 = new Fn;

Fn.prototype.b = function () {
    this.a = 3;
};
console.log(f1.a);//1
console.log(f1.prototype); //f1找到f 找到基类的原型undefined
console.log(f1.b);//函数体的地址function（）{this.a=3}
console.log(f1.b());//undefined 没有return
console.log(Fn.a);//3
console.log(Fn.prototype.a);//1
console.log(Fn.prototype.b());//undefined
console.log(Fn.prototype.a);//3
console.log(f1.hasOwnProperty('b'));//false
console.log('b' in f1);//true
console.log(f1.constructor == Fn);//true