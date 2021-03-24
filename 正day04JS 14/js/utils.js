/* 
公用方法：返回一个对象 用utils.什么什么 就可以用了
*/
var utils=(function(){
    var num=3;
    //该写什么写什么。。。
    function banner(){
        console.log("banner");
    }
    return{
        banner:banner,
        num:num
    }
})