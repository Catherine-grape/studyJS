var name="培奥";
var age=23;
var sex="男";


var name="瑞波";
var age=19;
var sex="男";

/* 
单例模式：就是一个对象，把描述一个对象的所有属性放在一起
对象的名字还叫做"命名空间"
*/
var obj={
    name:"培奥",
    age:23,
    sex:"男"
}


var obj2={
    name:"瑞波",
    age:19,
    sex:"男"
}
console.log(obj)
//想看某一个人的就不准确了 可以使用单例模式