/* 
需要按照某个规律重复去做一件事情的时候我们就可以使用for循环
 */var ary=[4,5,6,7,8];
// 定义一个初始值 i=0  制定循环条件i<5 符合条件就走执行体里面的语句，累计操作i++ 就是i=i+1符合条件就继续走
for(var i=0;i<5;i++){
    //ary i=0
    console.log(ary[i])
}
// var ary=[4,5,6,7,8];
// console.log(ary[0])
// console.log(ary[1])
// console.log(ary[2])
// console.log(ary[3])
/* 
需要按照某个规律重复去做一件事情的时候我们就可以用for循环
1、定义初始值
2、制定循环条件
3、符合条件，走执行体里面的语句
4、累计操作
5、符合条件，走执行体里面的语句
 */

for(var i=0;i<ary.length;i++){
    //ary i=0
    console.log(ary[i])
}