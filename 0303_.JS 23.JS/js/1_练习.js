function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype.getX = function () {
    console.log(this.x);
}
Fn.prototype.getY = function () {
    console.log(this.y);//让每个实例都可以使用
}
var f1 = new Fn;
var f2 = new Fn;
console.log(f1.getX == f2.getX);
console.log(f1.getY == f2.getY);
console.log(f1.__proto__.getY == Fn.prototype.getY);
console.log(f1.__proto__.getX == f2.getX);
console.log(f1.getX === Fn.prototype.getX);
console.log(f1.constructor);
console.log(Fn.prototype.__proto__.constructor);
f1.getX();
console.log(f1.getX());//un
f1.__proto__.getX();//内部输出un 不是执行结果
f2.getY();
Fn.prototype.getY();


function Foo() {
    getName = function () {//函数体 全局下给window增加的属性
        console.log(1);
    };
    return this;
};
Foo.getName = function () {
    console.log(2);//对象
};
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};

function getName() {
    console.log(5);
}

Foo.getName(); // 
getName();  // 
Foo().getName(); // Foo先执行，然后在用返回值找到getName在次执行 // 
getName(); // 
new Foo.getName(); // 先执行 Foo.getName,假设找到的结果是af0 然后执行 new af0()
new Foo().getName();
new new Foo().getName();

/*
1、成员访问：寻找对象里的属性名所对应的属性值就是成员访问(19)
    Fn.aa
2、new(带参数列表):就是构造函数执行有括号(19)
3、new(无参数列表):就是构造函数执行没有括号(18)
优先级一样，从左到右运算

 */