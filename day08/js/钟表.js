//2021年1月27号 周三 16:15:00；
function clock() {
    var res = new Date();
    var year = res.getFullYear();
    var month = res.getMonth()+1;
    var date = res.getDate();
    var day = res.getDay();
    var hours = res.getHours();
    var minutes = res.getMinutes();
    var seconds = res.getSeconds();


    var weekStr = ["周日", "周一", "周二", "周三", "周三", "周四", "周五", "周六"];
    weekStr[day]
    var res = year + "年" + addZero(month) + "月" + addZero(date) + "日" + weekStr[day] + " " + addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
    return res;
}



var ele = document.getElementById("clock");
ele.innerHTML = clock();
//每隔多长时间就会执行以下
setInterval(function () {
    ele.innerHTML = clock();
}, 1000);//定时器 每过1000毫秒
var num = 9;
/* function addZero(num){
    if(num<10){
    num="0"+num;
    }
return num;
} */
function addZero(num) {
    return num < 10 ? "0" + num : num;
}