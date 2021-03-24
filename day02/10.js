
//if else里面的num=6变成“6”  后会有一个数据类型的转换 ”6“==6
var num=6;
if(num==5){
    num++;
}else if(num==6){
    num--;
}else {
    num=0;
}


//switch case 里面的比较是绝对比较 相当于=== 连数据类型也必须一样
switch (num){
    case 5:
        num++;
        break;
    case 6:
        num--;
        break;
        default:
        num=0;
}


switch (num){
    //或者  一般情况下break都是要加的
    case 5:
    case 6:
        num--;
        break;
        default:
        num=0;
}
console.log(num);

