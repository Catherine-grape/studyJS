/* 
// let const
// 解构赋值 语法 就记住就行了
var a = 100;
var b = 200;
// 变量交换值
/* 
var c = a;
a = b;
b = c;


[a, b]//解构赋值 变量  = [b, a]//数组;  //数组的解构赋值 
console.log(a, b);
 */
var ary = [1, 2, 3, 4, 5];

/* var a=ary[0];
var b=ary[1];
var c=ary[2];
var d=ary[3];
var e=ary[4]; */

var [a, b, c, d, e] = ary;//前面的变量与数组是按照位置一一对应的
var [a, b, , c, d] = ary;//c=3 
let x = 100, y = 200;
//[x,y]=[y,x]
let arr = [y, x];//[200,100]
[x, y] = arr;//[x,y]=[200,100]

// q=1 w=[2,3,4,5] 剩余运算符 给穿上[]
let[q,...w]=ary;


var [a,b]=[1,2,3,4,5];
var [a=100,b=200,c=300]=[1,2]
console.log(a,b,c);//给默认值 a=1,b=2,c=300;

// 对象的解构赋值
var obj={
    name:"珠峰",
    age:100
}
var {name,sex,qqq,age,www}=obj;//对象的解构赋值是按照 属性名编写的
/* 
var name=obj.name
var sex=obj.sex
var qqq=obj.qqq
var age=obj.age
var www=obj.www
*/
console.log(name,sex,qqq,age,www);//"珠峰",undefind,undefind,100,undefind
console.log(name,sex='男',qqq=1,age=2,www=3);//"珠峰",'男',1,100,2,3

var {name:myname}=obj;
// me;var myname=obj.na
console.log(myname);

function fn(x=10,y=20){
    // 给形参赋予默认值：当没有传递实参的时候 走默认值
    console.log(x,y);
}

var obj2={a:1,b:2}

var obj3={
    ...obj2,//...扩展运算符 大白话就是把obj2的花括号给脱掉了
    c:234,
    d:345
}
var ary2=[1,2,3,4]
var ary3=[100,200,...ary2,300]

//没有this 没有arguments 不能作为类
ary2.map(item=>item+100)
ary2.map((item)=>{
    return item+100
})