// 原型继承：
// 让类B的原型指向类A的实例，那么以后类B的实例既可以调取类A实例的私有属性，也可以调取类A原型上的公有属性，那这种继承方式就是原型继承

function A() {
    this.getX = function () { console.log('恭喜发财') }
};
A.prototype.getY = function () {
    console.log('妮儿，你长的课俊哩')
};
function B() { }

B.prototype = new A;//  {getX:fun}
let f = new B; // 创建一个类B的实例
f.getX();
f.getY();
// 不能应用于内置类
// 既能继承私有的属性，还能继承公有的

/* 
中间类继承
*/
function fn() {
    arguments.__proto__ = Array.prototype;
    arguments.push(100);

}
fn(1, 2, 3, 4, 5);

let obj = {};
obj.__proto__ = Array.prototype;
obj.push(800);//[800] 不适合把__proto__的值给 为数组的原型
