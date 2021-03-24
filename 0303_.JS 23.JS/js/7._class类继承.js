class A{
    constructor() {
        this.x = 100;//私有属性
    }
    getX() {
        
    }//给类A原型上加函数属性
    s = 100;//给类A的实例增加私有属性
    static b = 200;//把类当作对象增加键值对
}
A.prototype.x = 800;//原型上加属性

//创建一个类B去继承类A的属性
class B extends A{
    constructor() {
        super();//继承类A的私有属性的
       // A.call(this) <==>super();
    }
}
let f = new B;
console.log(f);
// f-->B.prototype-->A.prototype-->Object.prototype

//B__proto__===>class A  prototype.constrctor===>class A
//Bconstrctor===>class B