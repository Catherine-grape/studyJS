//Function类是function的实例



function C1(name) { 
    if (name) {
        this.name = name;
    }
}
function C2(name) { 
    this.name = name;
}
function C3(name) { 
    this.name = name || 'join';
}
C1.prototype.name = 'Tom'; // 给C1类的原型增加属性
C2.prototype.name = 'Tom'; // 给C2类的原型增加属性
C3.prototype.name = 'Tom'; // 给C3类的原型增加属性
alert((new C1().name) + (new C2().name) + (new C3().name));//有小（）new的就是c1 没小括号new的就是c1.name
//c1.name  c1是个空实例，去调用name的时候 去的原型上找的 'Tom'
//c2 有一个私有属性 name 值是undefined 
//c3.name 有一个私有属性 name 值是join
//正常函数是形参赋值 变量提升new 堆空间 代码执行




function Fn(num) {
    this.x = this.y = num;
}
Fn.prototype = {
    x: 20,
    sum: function () {
        console.log(this.x + this.y);
    }
};
let f = new Fn(10);//f (x:10+this.y)
console.log(f.sum === Fn.prototype.sum);//true
f.sum();//this-->f;f.x+f.y->20
Fn.prototype.sum();//this-->Fn.prototype;Fn.prototype.x+Fn.prototype.y;20+undefined=NaN
console.log(f.constructor);//Object基类  原型重构改地址了所以没有constructor 找到基类