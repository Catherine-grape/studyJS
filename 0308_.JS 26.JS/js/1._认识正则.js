// 认识正则：就是JS中的数据类型之一
// RegExp 正则类 regular Expression
let reg = /wewe/;//字面量
let reg1 = new RegExp;
/* 
正则就是一种规则，用来处理（服务）字符串的一种规则//功能很强大但是不是很常用，一般用于校验
正则还有两大作用：
*/
let res = /\d/;//代表0-9之间的任意数字
console.log(reg.test('5'));//查看里面是否符合（5）这个规则吗？ 某个字符串是否符合当前规则test。某一部分符合这个规则就可以
console.log(reg.test('s55s'));//true 匹配
let str = 's5s';
console, log(reg.exec(str));//5 捕获 建立在匹配的基础上