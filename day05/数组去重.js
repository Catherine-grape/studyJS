//算法题 面试经常问
/* 
数组去重
var ary=[1,2,3,2,4];
 目的：ary=[1,2,3,4]
 去重原理：依次拿出数组中的每一项，跟后面的所有项进行比较
 第一次：1
       ==》 2,3,2,4
第二次：2
      ==》3,2,4==》重复删除掉 里面的2===》3，4
第三次：3
    ==》4
    不用拿最后一项所以length-1

    根据原理把逻辑写出来
*/

/* var ary=[1,2,3,2,4];

//依次拿出数组中的每一项（最后一项不用跟后面再比了，抛除最后一项）
for(var i=0;i<ary.length-1;i++){
    //拿出的没一项
var getItem=ary[i];
//要依次拿出剩余的所有项，然后再一一比较，如果有相同说明重复，删除,j比i多1
for(var j=i+1;j<ary.length;j++){
    //如果说相同，说明重复，
    if(getItem==ary[j]){
        ary.splice(j,1);
        //数组塌陷
        j--;
    }
}
}
console.log(ary);//[1,2,3,4]  

 */
var ary = [1, 1, 1, 2, 4];
/* 
 [1，1,1,2,4] 当i=0  1
            j=1   1
        ==》  [1,del,1,2,4]  
               0     1 2 3
        j++=2 因为删除了一项，数组中少了一项 直接跳过去了
 */


/* 用函数封装  必须掌握*/
function unique(ary) {
    for (var i = 0; i < ary.length - 1; i++) {
        var getItem = ary[i];
        for (var j = i + 1; j < ary.length; j++) {
            if (getItem == ary[j]) {
                ary.splice(j, 1);
                j--;
            }
        }
        }
        }  
            var res = unique(ary);
            var res = unique(ary2);


            var ary = [1, 2, 3, 2, 4, 3, 5];

            function unique(ary) {
                for (var i = 0; i < ary.length - 1; i++) {
                    var get = ary[i];
                    for (var g = i + 1; g < ary.length; i++) {
                        if (get == ary[g]) {
                            ary.splice(g, 1);
                            g--;
                        }
                    }
                }
                return ary;
            }
            var res = unique(ary);
            console.log(res);