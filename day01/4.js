// 引用数据类型：对象和函数

// 普通的对象 属性名是字符串或者数字  可以是任意属性值

var person1={"name":"wang","age":18,"job":"全栈开发工程师"};

// 数组  属性值可以是任意数据类型

var ary=["red","yellow","blue"]

// Math 数学对象 random随机数0-1 包含0 不包含1  round四舍五入

Math.random()
0.9052459891469167

Math.round(1.5); 
2

// Date 日期对象
new Date();
//Mon Jan 18 2021 14:44:45 GMT+0800 (中国标准时间) {}

// 正则

var res=/\d/g;
var str="a384aa3948aa9234";
// replace替换 \d代表选中数字  g为全局
str.replace("a","哈");
"哈384aa3948aa9234"

str.replace(/a/g,"哈");
"哈384哈哈3948哈哈9234"

function fn()
Symbol
Symbol("zhu")==Symbol("zhu")
false
"zhu"=="zhu"
true