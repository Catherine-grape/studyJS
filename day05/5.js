/* 
准备一个新框子：
遍历数组中的每一项，如果此项在新数组中没有，放到新数组中，如果已经有了，就不放了
*/

var ary=[1,2,3,1,1];

function unique(ary){
//新数组，
    var newAry=[];
    for(var i=0;i<ary.length;i++){
        var getItem=ary[i];
        //如果newAry没有此项，再添加
        /* if(newAry.includes(getItem==false)){
            在他的末尾添加
            newAry.push(getItem)
        } */
        if(!newAry.includes(getItem)){
            newAry.push(getItem)
        }
    }

    //然后
    return newAry;
}
var res=unique(ary);
console.log(res);


var ary=[1,2,3,1,1];
function unique(ary){
    var newAry=[];
    for(var i=0;i<ary.length;i++){
        var getItem=ary[i];
        if(!newAry.includes(getItem)){
            newAry.push(getItem)
        }
    }
    return newAry;
}
var res=unique(ary);
console.log(res);