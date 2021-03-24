//算法 冒泡排序

/* 
var ary=[8,2,1,5];
需求：从小到大排序
原理：两两比较，如果前者比后者大，交换顺序
[8,2,1,5]两两比较 前比后面大 就把前面换到后面换顺序
第一轮：[8,2,1,5]  经过第一轮比较得到了最大值8  3 [2，1，5，8] ary.length-1-0
第二轮： [2，1，5，8] 经过第二轮比较，得到了倒数第二个最大值 2 [1,2,5,8] ary.length-1-1
第三轮比较：
[1,2,5,8]  经过第三轮比较，得到了倒数第三项最大值 ary.length-1-2
第四轮比较： 第四轮还用比吗？一共四个数，你已经得到了3个最大值 ，最后的就是最小值，不用比较

总轮数的规律：数组的长度-1；
每轮比较多少回？两两进行比较 ary.length-1-已经比较过的轮数


*/

var ary=[8,2,1,5];
//轮数
function mySort(ary){
    for(var i=0;i<ary.length-1;i++){
        //两两进行比较  i=轮数
        for(var j=0;j<ary.length-1-i;j++){
            //如果前者比后者大，就交换顺序
            if(ary[j]>ary[j+1]){
                var temp=ary[j];//把原来的值存一份
                ary[j]=ary[j+1];
                ary[j+1]=temp;
            }
        }
    }
    return ary;
}
console.log(mySort(ary));

var ary=[8,2,1,5];
function mySort(ary){
for(var i=0;i<ary.length-1;i++){
    for(var j=0;j<ary.length-1-i;j++){
        if(ary[j]>ary[j+1]){
            var res=ary[j];
            ary[j]=ary[j+1];
            ary[j+1]=res;
        }
    }
}
return ary;
}
var temp=(mySort(ary));
console.log(temp);