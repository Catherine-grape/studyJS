//var  str="2019-8-18 12:32:18"
//"2019年08月18日 12时32分18秒"

/*  
var year=2019;
var month=8;
var res=year+"年"+month+"月"
*/
//str.split(":");["2019-8-18 12", "32", "18"] str.split("-") ["2019", "8", "18 12:32:18"]
/* var res=str.split(" ");
var dat=res.slice(0,1);
var dat2=res.slice(1,1);
var year=dat.split("-");
var time=year.slice(0,1)+"年"year.slice(1,1)+"月"+year.slice(2,1);

 */

var  str="2019-8-18 12:32:18"

var strAry=str.split(" ");//["2019-8-18","12:32:18"]
var leftAry=strAry[0].split("-");//"2019-8-18"    ["2019", "8", "18"]
var rightAry=strAry[1].split(":");//"12：32：18"    ["12", "32", "18"]
var res=leftAry[0]+"年"+addZero(leftAry[1])+"月"+addZero(leftAry[2])+"日"+" "+rightAry[0]+"时"+addZero(rightAry[1])+"分"+addZero(rightAry[2])+"秒";


function addZero(num){
    if(num<10){
      return  "0"+num
    }else{
        return num;
    }
}
var res2=addZero(2);

function addZero(num){
    if(num<10){
      return  "0"+num
    }else{
        return num;
    }
}
function addZero(num){
    return num<10?"0"+num:num;
}


var  str="2019-8-18 12:32:18";
var time=str.split(" ");
var leftAry=time[0].split("-");
var rightAry=time[1].split(":");
var res=leftAry[0]+"年"+fn(leftAry[1])+"月"+fn(leftAry[2])+"日"+" "+fn(rightAry[0])+"时"+fn(rightAry[1])+"分"+fn(rightAry[2])+"秒";

function fn(num){
    if(num<10){
        return "0"+num;
    }else{
        return num;
    }
}
var zero=fn(1);
console.log(zero);


