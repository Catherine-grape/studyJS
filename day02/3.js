// var obj={属性名1:属性值，属性名2:属性值}
//属性名又叫做“键” 一般只能是字符串和数字,加不加引号都可以，属性名为数字只能用第二种
//属性名又叫做“值”
//合称：键值对和键值对之间要用逗号隔开

var job="全栈开发工程师"
var obj={"name":"lili","age":15,"job":job}

var obj2={"name":"lili"}
// 第一种 增 添加属性名和属性值 有以下两种方式：但是属性名如果是数字的话，只能用中括号的方式 （如果原来有此属性，重新赋值就是修改，原来没有就是新增）
// obj2.age=18;
obj2["age"]=18;

// obj2.0=100; 报错
obj2[0]=100;


获取
// 对于undefined在对象中的一个场景，想要获取对象的一个属性名对应的值，但是没有此属性，得到的结果就是undefined
// 如果不是数字或者变量 一定要加“”
obj2={name:"lili",age:18};
console.log(obj2.name);//"lili"
console.log(obj2["name"]);//"lili"
console.log(obj2.job);//undefined 想要获取对应那个的一个属性名对应的值，但是没此属性，得到的结果就是 undefined

// 删除的两种方式：
var obj2={name:"lili",age:18};
obj2.age=null; //只是把值修改为null
delete obj2.age;//彻底删除，连属性名都没有了
