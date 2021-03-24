/* 
做一个抽奖程序，页面中有一个区域显示中奖人员的编号，在JS中写一段代码，要求每隔一秒钟随机创建一个四位的数字（每一位数字的取值范围0-9），当10秒结束后，结束定时器，最后显示的四位数字即是中奖的号码
*/
var code=document.getElementById("code");
var time=setInterval(function(){
    code.innerText=(getCode(num));
},1000);
var num="0123456789";
function getCode(num){
    var res="";
    for(var i=0;i<4;i++){
        var item=Math.round(Math.random()*(num.length-1));
        res+=num[item];
    }
    return res;    
}
setTimeout(function(){
    clearInterval(time);
    time=null;
},10000);
    
   