/* 
 1、 每个函数天生自带一个属性prototype，
 2、prototype 是一个对象数据类型，他身上天生自带一个属性constructor，指向当前的构造函数
 3、所有的对象天生自带一个属性__proto__,它指向当前实例所属类的原型。
 4、所有的实例都是对象数据类型
*/

function Fn(){
    this.name="li";
}
var f1=new Fn();
f1 instanceof Fn;//true
f1 instanceof Object;//true


Object.prototype.__proto__;//null
