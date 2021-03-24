/* 
window 全局作用域：
变量提升：var ary==>[1,2,3,4]==>[0,2,3,4]
function fn(111)
var res
*/

var ary=[1,2,3,4];
function fn(ary){
    //ary 私有变量 指针更改=[100] 
    ary[0]=0;//[0,2,3,4]
    ary=[0];//把私有ary的指向发生了改变,[0]
    ary[0]=100;//[100]
    return ary;//[100]
}
var res=fn(ary);
console.log(ary);//[0,2,3,4]
console.log(res);//100
