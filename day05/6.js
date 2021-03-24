/* 
对象去重：
var ary=[1,2,1,3,1];

var obj={1:1,2:2,}

先创建一个新对象，然后遍历数组中的每一项，让每一项作为对象的属性名和属性值，但是在给对象添加的时候，你需要判断下，如果此对象已经有这个属性了，那就说明重复，那就删除数组中的此项
*/

var ary=[1,2,1,3,1];

function unique(ary){
    var obj={};
    for(var i=0;i<ary.length;i++){
        //i=0 item=1
        var item=ary[i];
        //判断obj中有没有item这个项
        if(obj[item]==item){
            ary.splice(i,1);
            //去除后数组塌陷 需要i--
            i--;
        }else{
            //如果对象中没有这样的属性名和属性值
            //obj[1]=1  {1:1}
            obj[item]=item;
        }
    }
return ary;
   // obj[item]item=属性名 obj[item]=属性值
}
var res=unique(ary);
console.log(res);

var ary=[1,1,1,3,1];
function unique(ary){
    var obj={};
    for(var i=0;i<ary.length;i++){
        var item=ary[i];
        if(obj[item]==item){
            ary.splice(i,1);
            i--;
        }else{
            obj[item]=item;
        }
    }
    return ary;
}
var res=unique(ary);
console.log(res);
