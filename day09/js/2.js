h1.appendChild("h2");
h2.inserBefore(text,h1);
h1.removeChild(h2);
h1.setAttribute("index",1)
h1["a"]=100;


new Date();
getTime();//获取现在距离1970年1月1日 00:00:00


//定时器
//每过1000毫秒之后，执行回调函数里面的代码（执行一次）
//定时器的返回值，代表你那个定时器在页面中第几个
var time1=setTimeout(function(){
    console.log(1)
},1000)
//每隔多长时间就执行一下回调函数里面的代码（重复执行，只要间隔时间到了就执行）
var time2=setInterval(function(){
    console.log(2);
},1000);

var time3=setTimeout(function(){
    console.log(1)
},1000)

console.log("time1:"+time1+"time2:"+time2+"time3:"+time3); 