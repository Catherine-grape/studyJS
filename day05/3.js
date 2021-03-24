/* 
数组常用的方法：
• 作用：向数组末尾追加某一项
• 参数：添加的具体项，可以是一项,也可以是多项
• 返回值：新数组的长度
• 是否改变原数组：改变
*/
//1) push  增加经常
/* 
作用：往数组的末尾追加项
参数：具体要追加的某项
返回值：新数组的长度
是否改变原数组：改变了 
*/
var ary=[1,2,3];
//用一个变量称装一下 ary
var res=ary.push(6);
console.log(ary);//[1,2,3,6]
console.log(res);//新数组的长度

//2) unshift 增加经常
/* 
作用：往数组的开头追加项
参数：具体要追加的某项
返回值：新数组的长度
是否改变原数组：改变了
 */

 var ary=[1,2,3];
 var res=ary.unshift(5);
 console.log(ary);//[5,1,2,3]
 console.log(res);

//3) pop 删除经常
/* 
作用：删除数组的最后一项
参数：无
返回值：删除的项
是否改变原数组：改变了
 */
 var ary=[2,3,5,8];
 //里面不参加值
 var res=ary.pop();
 console.log(ary);//[2,3,5]
 console.log(res);//8

 //4) shift 删除 经常
/* 
作用：删除数组的第一项
参数：无
返回值：删除的项
是否改变原数组：改变了
 */
var ary=[2,3,5,8];
var res=ary.shift();
console.log(ary);//[3,5,8]
console.log(res);//2

//5) splice（n,m,x1,x2) 替换 经常
/* 
作用：从索引n开始(包含n) 删除m项，并且用x1，x2进行替换
参数：
返回值：一个数组，并且放的是删除的项（哪怕删除一个也是数组的项）注意！
是否改变原数组：改变了
 */
var ary=[0,1,2,3];
var res=ary.splice(0,2,5,6,7,8);
console.log(ary);//[5,6,7,8,2,3]
console.log(res);//[0,1]
//返回值是数组如果想获取里面的数值需要用 xx的第0项
console.log(res[0]);
//返回值是数组如果想获取里面的数值需要用 xx的第1项
console.log(res[1]);


/* 
往数组的开头新增一项
*/

var ary=[0,1,2,3];
//从第0项 删除0 就是不删除
var res=ary.splice(0,0,6);
console.log(ary);//[6,0,1,2,3]
console.log(res);//[]

var res=ary.splice(ary.length-1,0,9)//[0, 1, 2, 6, 3]
//往数组的末尾追加 因为把最后一位删除了 所以-1错误  最后一项是ary.length-1,增加的话就是ary.length
var ary=[0,1,2,3];
var res=ary.splice(ary.length-1,0,6);
console.log(ary);//===>[0,1,2,6,3]
//往数组的末尾追加 0，1都可以
var ary=[0,1,2,3];
var res=ary.splice(ary.length,0,6);
console.log(ary);//[0, 1, 2, 3, 6]

/* 
往数组的末尾追加 
- push
- ary.splice（ary.length,0,6)
- ary[ary.length]=200
*/

/*
删除第一项
- shift
- ary.splice(0,1)

 */
var ary=[1,2,3];
ary.splice(0,1);//===>[2,3]
console.log(ary);

/*
删除最后一项
- pop
- splice(.length-1,1)
- ary.length--

 */
var ary=[0,1,2,3];
ary.splice(ary.length-1,1);
console.log(ary);