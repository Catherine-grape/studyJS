/*  
在全局作用域下声明的变量和window关系
在全局下声明的变量，相当于给window这个对象添加了属性名和属性值，属性名就是那个变量，属性值就是那个变量值

{
    "a":3,
    "fn":function() {alert(1);}
}
*/

var a=3;
window.a;//3

function fn(){
    alert(1);
}

window.fn;//fn 这个函数

console.dir(window);//window 是一个大的对象

//怎么判断某个对象是否拥有某个属性：用：属性名 in 对象；返回值是布尔数据类型，如果说是true 代表拥有这个属性 如果是false 代表没有

var obj={"name":"lili"};
console.log("name" in obj);//true 返回值是布尔类型
console.log("age" in obj);//false


//在window 身上的一些属性或者方法，咱们可以把window省去不写
window.alert(1);//  在全局下所以把window省去了