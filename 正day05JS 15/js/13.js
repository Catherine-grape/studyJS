
/* 
第一种方式 叫：字面量
*/
var obj={
    name:"li",
    age:18
}
/* 
第二种方式：类（构造函数的方式）
*/
var obj2=new Object();

//创建一个数组
var  ary=[1,2,3];// 字面量的形式创建
//构造函数的方式创建一个数组
var ary2=new Array(2);//只跟一个参数，代表数组的长度
var ary3=new Array(1,2,3);//多个参数，代表数组的每项

//注意一点：用字面量形式去创建基本数据类型类的实例，用instanceof 检测的结果是false，因为数字字面量形式去创建的时候，不是标准的实例，所以才造成检查结果是false，但是数字类上所有的方法，照常使用

var num=1;
var num2=new Number(3);
num instanceof Number;//false
typeof num;//"number"

num2 instanceof Number;//true