/* 
倒计时：
1、确定目标时间 2021-1-29 17:00
2、现在的时间
3、时间差=确定目标时间-现在的时间；
把计算出来的时间差转换为 时 分 秒
var diff=new Date("2021-1-29 17:00:00").getTime()-new Date().getTime;//单位毫秒
var diff2=new Date("2021-1-29 17:00:00")-new Date();//单位毫秒 都是时间戳
*/
function addZero(num){
    return num<10?"0"+num:num;
}

var time=setInterval(function(){
    cutDown.innerHTML=cutTime(target);
},1000);

function cutTime(target){
    var tes="倒计时结束!";

    var diff=new Date(target)-new Date();//得到了时间差，单位毫秒
    //如果当前的时间差已经小于等于0了 就该停了
    if(diff<=0){
        alert("倒计时结束！");
        clearInterval(time);
        cutDown.innerHTML="0";
        time=null;
        //return "倒计时结束！";
        return tes;
    }
    var hour=Math.floor(diff/(1000*60*60));
    var minute=Math.floor((diff-(hour*1000*60*60))/(1000*60));
    var second=Math.floor((diff-hour*1000*60*60-minute*1000*60)/1000);
    var res=addZero(hour)+"时"+addZero(minute)+"分"+addZero(second)+"秒";
   // return res;
   return ;
}

var target="2021-1-30 17:00:00";//目标时间

var cutDown=document.getElementById("cutDown");


