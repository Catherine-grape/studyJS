//6) slice（n,m,x1,x2) 复制 经常
/* 
作用：从索引n开始(包含n) 到索引m结束 （不包含m）
参数：
返回值：复制的新数组 注意！
是否改变原数组：没有改变
 */

 var ary=[0,1,2,3];
 var res=ary.slice(0,2);
 console.log(ary);//[0,1,2,3]
 console.log(res);//[0,1] 到m项但是不包含m

 //复制整个数组 从索引0开是复制整个数组，括号里面不写也是复制整个数组
 ary.slice(0);
 ary.slice();
//可以放负数 但是注意前面的比后面的小
 ary.slice(-3,-1);//[1,2]

 //7) concat拼接 经常
/* 
作用：拼接数组
参数：具体的某项、数组
返回值：拼接后的新数组 注意！
是否改变原数组：没有改变
 */

 var ary=[1,2,3];
 var ary2=[6,7]
 var res=ary.concat(4,5,ary2);//[1,2,3,4,5,6,7]
 console.log(ary,res);//res 不变


 //8) toString
/* 
作用：把数组转为字符串
参数：
返回值：字符串
是否改变原数组：没有改变
 */
var ary=[1,2,3];
var res=ary.toString();
console.log(ary,res);//"1,2,3"

//9) join 经常
/* 
作用：把数组变成字符串 按照指定的连接符，把数组中的每一项链接在一起
参数：连接符
返回值：字符串
是否改变原数组：没有改变
 */
var ary=[1,2,3];
var res=ary.join("+");
console.log(res);//"1+2+3";
//这个不多 eval是相加
var res2=eval(ary.join("+"));//6


//10) reverse 倒叙
/* 
作用：倒叙
参数：
返回值：倒叙后的数组
是否改变原数组：改变
 */

 var ary=[1,2,3];
 var res=ary.reverse();

 console.log(ary,res);//[3,2,1]

 //11) sort 排序 特别广泛
/* 
作用：排序
参数：
- 无：排 10以内的不会受影响
- 函数，函数有一个返回值，return a-b；代表升序，如果是b-a返回值就是降序
返回值：倒叙后的数组
是否改变原数组：改变
 */

 var ary=[1,6,3,2,9];
 var res=ary.sort();//[1,2,3,6,9]
 var ary=[1,6,3,2,9,11];
 var res=ary.sort();//[1,11,2,3,6,9]

 var ary=[1,6,3,2,9,11];
 var res=ary.sort(function(a,b){
     //升序
   //  return a-b;   [1,2,3,6,9,11]
//降序
     return b-a;
     //[11,9,6,3,2,1]
 });

 //12) indexOf  特别广泛
/* 
作用：检索某项在数组中首次出现的位置（索引），如果说没此项 那返回值就是-1 ---》可以拿来做判断
参数：indexOf(x,n)
- x：检索的那项
- n：从哪一个索引开始检索x项 从索引几开始，包含当前的

是否改变原数组：不改变
 */
 
 var ary=[1,2,2,1,1,3];
 var res=ary.indexof(2);//1
 var res2=ary.indexOf(5);//-1


  //11) lastIndexof  特别广泛
/* 
作用：检索某项在数组中最后出现的位置（索引），如果说没此项 那返回值就是-1 ---》可以拿来做判断
参数：indexOf(x,n)
- x：检索的那项
- n：到索引n的位置停止搜索包含当前的

是否改变原数组：不改变
 */

 var ary=[1,2,2,1,1,3]
 var res=ary.lastIndexOf(1);
 res//4
 var res2=ary.lastIndexOf(5);
 res2//-1
 var res=ary.lastIndexOf(1,3);
 res//3


// 13) includes  特别广泛
/* 
作用：判断是不是包含某一项,返回值是布尔类型，true或者是false，如果是true代表包含，false代表不包含
参数：判断的项
是否改变原数组：不改变
*/
var ary=[1,2,3,4];
var res=ary.includes(2);//true
var res=ary.includes(8);//false


//14）forEach  
/* 
作用：遍历数组中的每一项
参数：函数，函数里面有两个形参：x，y
 - x 代表数组中的每一项
 - y 代表的数组中的每项的索引
 返回值：如果return return多少就是多少 如果没有return 就是undefined
是否改变原数组：不改变
*/

var ary=[5,6,7];
ary.forEach(function
    //item=数组中的每一项，index=代表每一项的索引
    (item,index){
  //  console.log(item)//5,6,7
    console.log(index)//0,1,2
});
console.log(ary);

//14）map  映射
/* 
作用：把数组中的每一项映射成别的内容
参数：函数，函数里面有两个形参：x，y
 - x 代表数组中的每一项
 - y 代表的数组中的每项的索引
 返回值：映射之后的新数组
是否改变原数组：不改变
*/

var ary=[1,2,3];
var res=ary.map(function(item,index){
    console.log(item,index);//[1,2,3] [0,1,2]
    return item+2;
})
console.log(ary,res);//[1,2,3] [3,4,5]