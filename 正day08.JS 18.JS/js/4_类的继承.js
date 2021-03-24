// 原型继承 继承：让子类继承父类 使用父类上的方法
//  什么时候才需要使用继承？
//  当我们要编写一个类的时候 需要用到某个类的属性或者方法
//  这时我们可以使用继承
function A() {
    this.name = "A";
    this.age = 100;
}
A.prototype.say = function () {
    console.log('姓名是：${this.name;年龄是${this.age}')
}
function B() {
    this.sex = '男';
    this.hight = 100;
}
let a = new A();
B.prototype = a;//B类的原型 指向了 A类的一个实例
B.prototype.constructor = B;//一旦进行类原型重定向的话，尽量修改constructor。
//这种继承方式称为原型继承 是把A的私有属性 变成类B的共有属性
B.prototype.play = function () {
    console.log('玩')
}//注意顺序 先定义后增加
let b = new B();
let b = new B();//{sex,hight}
b.say();
b.play();




//中间类继承

function add(...arg) {
    return eval(arg.join("+"))
}
//arguments不能调用join
function add() {
    arguments.__proto__ = Array.prototype;//更改指向
    //return eval([].join.call(arguments,"+"))
    // return eval(arguments.join("+"))
    return eval(arguments.join("+"))
}

//数组求和
var q = [12, 3, 4, 5]
eval(a.join("+"))


//call 继承 只能用来继承私有属性 call更改this指向 

function A() {
    this.name = "A";
    this.age = 100;
}
A.prototype.say = function () {
    console.log('姓名是：${this.name;年龄是${this.age}')
}
function B() {
    A.call(this);//只拿到A的私有属性 这里的this 是B的实例
    //让A函数执行 并且把A中的this换成B的实例
    this.sex = '男';
    this.hight = 100;
}
console.log(new B)

//寄生组合式继承
//公有的变成公有的 私有的变成私有的
function A() {
    this.name = "A";
    this.age = 100;
}
A.prototype.say = function () {
    console.log('姓名是：${this.name;年龄是${this.age}')
}
function C(){
    A.call(this);//继承类私有属性
}
//C.prototype = A.prototype;//继承了公有属性 有瑕疵
//为了避免子类污染父类，我们一般不采用上述的方法 而是采用Object.create的方式产生一个新的空对象
// 让这个空对象的__proto__去指向父类(A)的原型
C.prototype = Object.create(A.prototype);
C.prototype.constructor=C;

let a2 = new A();
//console.log(a2.constructor);//c的
let c2 = new C();
console.log(a2.constructor,c2.constructor);


//检测数据类型 Object.prototype.toString.call()   //简写({}).toString.call()//window.toString===Object.prototype.toString.call() true
//返回字符串 ({}).toString==>"[Object Object]" 第二个是它所属的类型
//基类原型上的toString方法 可以返回数据的类型，所以只要让其他数据类型能够调用到基类原型上的toString方法，就能查到对应的数据类型

