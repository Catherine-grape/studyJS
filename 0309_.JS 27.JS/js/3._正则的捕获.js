/* 
正则的捕获：
正则类的原型上的方法
test：用来匹配的
exec：用来捕获，获取正则匹配到的内容
*/
let reg = /\d/;
let str = 'df3g4hjkfgg5g6g';
reg.exec(str);

/* 
exec捕获到的内容是一个数组的格式
如果捕获不到 内容是null
数组里的按照索引排列的键值对是正则捕获的内容
index的值是捕获过的内容开始位置的索引
input：源字符串
如果在正则里加小括号，指向精确匹配，并不想去捕获它，那就在小括号的前面加？：
正则的懒惰性：正则只会捕获字符串里符合规则的第一个内容
取消正则的懒惰性：在正则后面加修饰符g，就会取消正则的懒惰性
*/
let reg1 = /\d/;
let str1 = 'df3g4hjkfgg5g6g';
console.dir(reg.lastIndex);// 0 控制的是正则匹配开始的位置
reg.exec(str1);
/* 
lastIndex的值如果不变，那不管你捕获多少次，他都是从一个位置开始匹配的
*/

let reg2 = /\d/g;
let str2 = 'df3g4hjkfgg5g6g';
console.dir(reg2.lastIndex);//0
reg2.exec(str2);//['3']
console.dir(reg2.lastIndex);//3
reg2.exec(str2);//['4']
console.dir(reg2.lastIndex);//5
reg2.exec(str2);//['5']
console.dir(reg2.lastIndex);//12
reg2.exec(str2);//null
console.dir(reg2.lastIndex);//0

// 自己封装一个方法，用来捕获字符串中所有符合规则的内容，以一个数组的形式进行返回，如果捕获不到就是null
function myExecAll(str) {
    //1.先看当前的正则有没有g，如果没有就直接return第一次捕获的值就好了
    if (!this.global) {
        return this.exec(str);
    } 
    let ary = [];//创建一个数组，用来存储每一次捕获的内容
    let res = this.extc(str);//创建一个变量，用来接收每一次捕获的数组内容
    while (res) {
        //while用于不知道循环多少次的循环
        let [value] = res;//先把捕获的内容解构出来 == let value=res[0]
        ary.push(value);//再把内容push到数组中
        res = this.exec(str);//再继续捕获
    }
    return ary.length?ary:null;
}
RegExp.prototype.myExecAll = myExecAll;
let res = reg.myExecAll(str);
// 第一种情况，如果正则不加g，返回第一次捕获的内容["3",...]
// 第二种情况，如果捕获不到，返回null
// 第三种情况，正常捕获，返回的内容["3","4","5"]

//上述封装就是 字符串上的match的方法
str.match(reg);
// 在字符串的原型上有一个match方法，它的使用方法跟咱们刚才封装的方法是一样的

let res = str.matchAll(reg);//返回的是一个遍历器 可以使用for of 去遍历它
for (var key of res) {//for of 就是配合遍历器使用的
    console.log(key)
}