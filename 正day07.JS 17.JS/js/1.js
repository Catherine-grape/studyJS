//作用域链 原型链
//作用域链 用于查找变量   上级作用域（函数在那个作用域定义的）
//原型链 用于查找  属性 prototype（只有函数或者/类） _proto_（对象）
/* 
数组先是数组再是对象  判断数据类型？ typeof 判断基本数据类型没问题，引用数据类型 有一些问题
var obj={};
var ary=[];
tapeof null==>"object"
instanceof这个实例是否隶属于那个类（构造函数）
in检测当前对象是否存在 某个属性 
'a'in obj  in相当于调用a这个方法是否在obj里面 查找在不在

面试： instanceof 
obj.toString==>"[Object Object]"
Array.Prototype 也有 toString 跟obj不是一个 起重的
[].toString==>""
Object.prototype.toSting.call([])==>"[object Array]" 
call改变里面this的指向
*/
//怎么能让数组 直接调用到 基类上的 toString 而不是数组类的toString
obj2.toString() //方法 "[Object Object]"
Object.prototype.toString.call([]);

([]).toString.call([])//上下两种一样的
obj2.toString.call([]);

function fn(){
    console.log(arguments);
    //arguments 实参集合
    console.log(this)
}
var obj2={
    f:fn
}
obj2.f()//this->obj2
var f2=obj2.f;
obj2.f.call([1,2,3])//call（内部）让obj2.f这个函数执行，有了call 改变this是[1,2,3]

f2();//this->window
f2.call('');//让函数执行并且把函数中的this改成call的第一个参数


