/* 
定时器是异步行为，先走同步再走异步

同步：先去烧开水---等着---泡面---过来打开电视剧刷剧（走完一步再走下一步，如果上面没走完 就一直等着）
异步：烧水，一边烧水，一边过来看电视剧；
*/
setTimeout(function(){
    console.log(1);
},0);
console.log(2);//2  1异步的先走下面 放到异步队列里面 当时间到了在走


//清除定时器 的两种方法：clearInterval ();clearTimeout();
var num=0;
var time1=setInterval(function(){
    num++;
    if(num>10){
        //清除定时器  用拿到它的名字,配合time2=null使用；
        clearInterval(time1);
        time1=null;
    }
    console.log(num);
},1000);



var time2=setTimeout(function(){
    console.log(1);
},1000);
//需要放在下面  在上面的时候 还没有赋值就是undefined  都是对应去写的，虽然都可以清掉；
// clearTimeout(time2);
clearInterval(time2);
time2=null;