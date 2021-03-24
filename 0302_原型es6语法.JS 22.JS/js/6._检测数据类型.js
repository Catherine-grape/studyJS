/* type of
constructor
instanceof
Object.prototype.toString.call */

/* 
1.typeof
检测数组或者普通对象，或者null，它的返回值都是'object'
不能够详细的区分数组，对象、null
2.constructor 基于构造函数检测数据类型
如果当前实例的所属类的原型，被重定向或者实例上有constructor私有属性，都会导致检测的结果不准确
function Fn() {
    
}
let f1 = new Fn;
console.log(f1.constructor===Fn);//true
let num=new Number(1);

console.log(num.construtor===Number);//true
Fn.prototype={};//原型重定向，(重定向之后的原型是没有constructor的)
let obj={constructor:100};
console.log(obj.constructor===Object);//false 原型重定向也不准类
*/
/* 
3. instanceof 检测当前实例是否属于某个类
只有当前的类的原型出现在实例的原型链上，就返回true
function Fn() {
    
}
let f1 = new Fn;
console.log(f1 instanceof Fn);//true
console.log(f1 instanceof Object);//true
*/
/* 
4.Object.prototype.toString.call();
只能检测内置类，不能够检测自定义类，因为检测自定义类返回的都是[Object Object]"
简写 toString.call();也可以

Object.prototype.toString.call(1);//"[Object Number]"
*/
function Fn() {
    this.x = 100;
    this.y = 100;
};
Fn.prototype.getX = function () {
    console.log(this.x)
};
let f1 = new Fn;
Fn.prototype = {
    getY: function () {
        console.log(this.y)
    }
};
let f2 = new Fn;
