//Object.create创造一个www的空对象，__proto__不是指向基类的原型而是指向qqq  api的用法
let www=Object.create(qqq);
var ary=[1,2,3];
var obj=Object.create(ary);

//new Object(); 构造函数 {} 字面量 创建空对象  __proto__指向基类
function create(proto){
    // var obj={};
    // obj.__proto__=proto; ie浏览器不支持程序员操作__proto__
    // return obj;
    function F(){
        F.prototype=proto;
        return new F();
    }
}
var obj2={q:1};
var obj=create(obj2);
obj.__proto__===obj2;