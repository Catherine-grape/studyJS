//字符串常用的方法
/* 
字符串也有索引
*/
//因为字符串是值数据类型，是按值操作，所以都不修改原来的数据
/* 
1）chatAt（）
作用：获取指定索引对应的字符 
参数：索引
返回值：索引对应的字符
*/
var str="abc";
str.charAt(0);//"a"
//如果超出字符串的长度
str.chatAt(100);//""

str[0];//"a"
//如果超出字符串的长度
str[100];  //undefined

/* 
2）charCodeAt（索引） 比较少
作用：获取指定索引对应的字符的ASCII码值（十进制）(可以用做比较 码值相等)
参数：索引
返回值：索引对应的码值
*/
var str="asddjfhksjg";
undefined
str.charCodeAt(0);
97
/* 
3）indexOf（）
作用：获取字符首次在字符串出现的位置索引 如果里面不包含此字符，返回值就是-1.大于=0就是包含
参数：
返回值：
*/
var str="abcafffa"
str.indexOf("a",1);//检索“a” 从1开始检索首次出现的位置  3

/* 
4）lastindexOf（）
作用：获取字符最后一次在字符串出现的位置索引 如果里面不包含此字符，返回值就是-1.大于=0就是包含
！=-1 （不等于-1）
if（str.indexOf（“a“）>=0){
}
参数：
返回值：
*/


/* 
5）slice （n,m） 复制 可以跟负数
作用：复制从索引n开始复制到索引m结束（不包含m项）  
参数：索引
返回值：索引对应的字符
注意：如果第二个参数不写，就是从第n项开始复制到最后一项结束
- 无参数的时候也是复制全部  0复制所有 
- 负数索引和正数索引的一个关系：字符串的总长度+负数索引=正数索引；

slice substring substr 联系记忆
*/
var str="abcdef"
var res=str.slice(0,3);//"abc"
var res2=str.slice(-3,-1);//"de"
var res3=str.slice(3,5);//"de"
str.length;//6
str.slice();//"abcdef"
str.slice(0);//"abcdef"
str.slice(-3);//"def"


/* 
6）substring（n,m）复制
作用：跟slice一样，区别在于：substring 不支持负数索引  slice支持
参数：
返回值：
*/
var  str="abcdef"
str.substring(0,3);//"abc"
/* 
7）substr（n,m）截取
作用：从索引n开始，截取m个
参数：
返回值：
*/
var str="abc";
str.substr(0,2);//"ab"


/* 
8）toUpperCase（）;转为大写
toLowerCase() ;转为小写
作用：
参数：
返回值：
事件原标签名  可以转为大写或者小写后作为判断 （比较）
*/

    

    /* 
9）repalce（n,m）替换  重要
作用：n：你想要替换掉的字符，还可以跟正则（正则制定一些规则 g全局匹配 反斜杠是转译  \d 是匹配里面的数字 \d+ 是1到多个）
m：你想要替换成的字符
参数：
返回值：
*/
var str="zhufengzhuhahzhuha"
undefined
var res=str.replace("zhu","哈");//res  "哈fengzhuhahzhuha"

res=res.replace("zhu","哈");//"哈feng哈hahzhuha"

str.replace(/zhu/g,"哈");//"哈feng哈hah哈ha"

/* 
10）split（分割符） 重要 经常使用
作用：按照指定的分隔符，把字符串分割成数组
把字符串转成数组 ？（分隔符）split
把数组转成字符串（连接符）join
参数：
返回值：
*/
var str="10:22:33";
str.split(":");
["10", "22", "33"]

"abce".split("");//["a", "b", "c", "e"]
