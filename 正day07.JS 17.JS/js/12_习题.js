function Foo(){
    getName=function(){
      console.log(1);
    };
    return this;
}
Foo.getName=function(){
    console.log(2);
}
Foo.prototype.getName=function(){
    console.log(3);
}
var getName=function(){
    console.log(4);
}
function getName(){
    console.log(5);
}
Foo.getName();//2
getName(); //4
Foo().getName();//1
getName();//1
new Foo.getName();//2
new Foo().getName();// 先运算new Foo() 3
new new Foo().getName();//3
let a=new Foo().getName();//new Foo() 通过new出来的实例 找到getName 当作普通函数执行
let b=new new Foo().getName();//new Foo（） 通过new出来的实例 找到getName 然通过new执行
// 先运算里层的 new Foo()（看成A）,==>A.getName ==>new b (); //3 3

//2、4、1、1、2、3、3