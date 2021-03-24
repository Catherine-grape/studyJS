/* 
高级单例模式：
*/

var utils=(function(){
    var num=10;
    function getDate(){

    }
    function bindHTML(){

    }
    function banner(){

    }
    //...
    return {
        //初始化页面（操作）
        init:function(){
            getDate();
            bindHTML();
            banner();
        },
        num:num
    }
})();

utils.init();
utils.num;