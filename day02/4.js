思考题
var obj={
    "name":"lili"
    // "age":18
}
var name="zhufengpeixun";
console.log(obj.name);
console.log(obj["name"]);
console.log(obj[name]);//obj["zhufengpeixun"] ===>undefined

// window 全局作用域（栈内存）  变量提升 后 代码自上而下  一个栈 一个堆   声明  存储值 基本数据类型简单放在栈中  基本数据类型是按值操作

// 栈内存：提供了供JS执行的区域  以及存储基本数据类型
var a=12;
var b=a;
console.log(b);  12

// var obj1={"name":"lili","age":12}; 引用数据类型是按照空间地址操作 复杂会存在堆内存中 16进制 存的键值对 给的空间地址：堆  
var obj2=obj1; 
obj2.age=18;   
console.log(obj1.age);  18

/* 基本数据类型和引用数据类型的区别？基本数据类型是按值操作，引用数据类型是按空间地址（引用地址）操作
堆内存、栈内存
栈内存的作用：1、供js执行的环境
            2、给基本数据类型存储
堆内存：存引用数据类型，对于对象来说，存的就是键值对，对于函数来说，存的就是字符串 */