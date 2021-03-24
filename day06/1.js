var ary=[1,2,3,4];
//删除数组最后一项的方法；
ary.pop()
ary.splice(ary.length-1,1)
ary.length--
//末尾增加一项
ary.splice(ary.length,1,1);
ary.push(1);
ary[ary.length]=1;

//求1到100所有数之和，任意数求和 考虑非有效数字   //求1到100中同时能被2整除又能被3整除的所有数之和 录视频

var res=null;
for(var i=1;i<=100;i++){
    res=res+i;
}

function fn(n){
    //1+fn(2)
    //2+fn(3)
    if(n>100){
        return 0
    }    
 return  n+ fn(n+1)
}
var res=fn(1);
console.log(res);

// 复制 截取有几种方法？跟slice substring substr 。slice和substring的区别 slice支持负数索引


//上机考试  数组去重（两个方法）、冒泡排序