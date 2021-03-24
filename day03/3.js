var ary=[4,5,6,7,8,9];

// for (var i=0;i<ary.length;i++){
//     console.log(ary[i])
// }
// console.log(i)

// for (var i=length;i>ary.length-1;i--){
//     console.log(ary[i])
// }
// console.log(i)
// 第一种解法
// for(var i=ary.length-1;i>=0;i--){
//     console.log(ary[i])
// }

/*  第二种写法
var ary=[1,2,3,4,5];
for(i=0;i<ary.length;i++){
	console.log(ary[ary.length-1-i]);
}
*/

//打印所有的奇数项  ===打印所有索引为偶数的项   4%2==0  %取余

for(var i=0;i<ary.length;i++){
    if(i%2==0){
        console.log(ary[i])
    }
}
// var ary=[0,1,2,3,4];
// for(var i=0;i<ary.length;i++){
//     if(i%2==0){
//         console.log(ary[i]);
//     }
// }
// console.log(0)
// console.log(2)
// console.log(4)