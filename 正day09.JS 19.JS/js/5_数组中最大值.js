var ary=[123,34,2,453,5647,9,657];
//1、假设法
let max=ary[0];
for(let i=0;i<ary.length;i++){
    max=ary[i]>max?ary[i]:max
}
console.log(max)


var  ary = [12,3,66,88,68,56,66];
//思路 就是用前一项跟后一项比较 把大的放到后边去  一个瑕疵 会改变原数组

for(var i=0;i<ary.length-1;i++){
    if(ary[i]>ary[i+1]){
       var temp=ary[i];
       ary[i]=ary[i+1];
       ary[i+1]=temp;
    }
}
console.log(ary);


//利用sort排序 升序排好最后一项就是最大值
var  ary = [12,3,66,88,68,56,66];
var max=ary.sort(function(a,b){
   return a-b;
})[ary.length-1];
console.log(max);

var  ary = [12,3,66,88,68,56,66];
var max=ary.sort(function(a,b){
   return a-b;
}).pop();//把最后一项删除 返回删除的项赋给max
console.log(max);



var ary=[2,6,1,0];
Math.max(...ary);//...解构

var ary=[2,6,1,0];
//利用apply传递参数是一个整体的传递，然后函数接收的时候 还是离散接收的
Math.max.apply(null,ary);//第一个值无所谓里面的this指向  apply以一个整体的形式传递  接收时是离散型