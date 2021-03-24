/* 
工厂设计模式：就是一个函数，封装一个功能性的代码，实现批量生产
没有类的概念。
*/
//手动
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
//形参相当于材料
function fn(name,age,sex){

    return {
        name:name,
        age:age,
        sex:sex
    }
}
fn("li",18,"女");
fn("dav",20,"女");
fn("gary",23,"男");