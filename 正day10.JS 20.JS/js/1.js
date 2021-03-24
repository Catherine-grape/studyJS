// 获取年纪最大的那个人
var ary=[
    {name:"张三1",age:204},
    {name:"张三2",age:222},
    {name:"张三3",age:234},
    {name:"张三4",age:214},
    {name:"张三5",age:142},
]

/* for(var i=0;i<ary.length-1;i++){
    var arg=ary[i].age;
    if(arg[i]>arg[i+1]){
        var temp=arg[i];
        arg[i]=ary[i+1];
        arg[i+1]=temp;
    }
} */

//1
/* function getMax(ary){
    for (let i=0;i<ary.length-1;i++){
        if(ary[i].age>ary[i+1].age){
            let temp=ary[i];
            ary[i]=ary[i+1];
            ary[i+1]=temp;
        }
    }
    
}
console.log(ary[ary.length-1]);
 */
//2 假设法
/* 
let max=ary[0];
for(let i=0;i<ary.length;i++){
    max=ary[i]>max?ary[i]:max
}
console.log(max)
*/
/* function getMax2(ary){
    //假设第一条数据 就是年纪最大的那一条，然后循环比较，用假设的数据跟每一项比较
    let max=ary[0];
    //i=0相当于自己和自己比较了一次是冗余的 可以直接从1开始
    for(let i=1;i<ary.length;i++){
        // max=ary[i].age>max.age?ary[i]:max
        ary[i].age>max.age?max=ary[i]:null;
        
    }
    return max
}
console.log(getMax2(ary));

 */

// 3 sort

/* 
var  ary = [12,3,66,88,68,56,66];
var max=ary.sort(function(a,b){
   return a-b;
})[ary.length-1];
console.log(max);
*/
function getMax3(ary){
    let max=ary.sort(function(a,b){
        return a.age-b.age;
    })[ary.length-1]
    console.log(max);
}
getMax3(ary);

