function clock() {
    var res = new Date();
    var year = res.getFullYear();
    var month = res.getMonth()+1;
    var date = res.getDate();
    var day = res.getDay();
    var hours = res.getHours();
    var minutes = res.getMinutes();
    var seconds = res.getSeconds();

    var weekStr = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"];
    weekStr[day];
    var res = year + "年" + addZero(month) + "月" + addZero(date) + "日" + " "+weekStr[day] + " " + addZero(hours) +":"+ addZero(minutes) +":"+ addZero(seconds);

    return res;
}
var ele = document.getElementById("clock");
ele.innerHTML = clock();
setInterval(function () {
    ele.innerHTML = clock();
}, 1000);
var num = 9;
function addZero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}