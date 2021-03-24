function A() {
    this.x=100
};
A.prototype.ss = 200;

function B() {
    A.call(this);//只能继承私有属性
}
B.prototype = Object.create(A.prototype);
let f1 = new B;//{x:100}

let obj={ss:1000}
 let a= Object.create(obj);//创建一个新对象，并且这个新对象的__proto__会指向create函数的第一个实参