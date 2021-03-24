
(function(){
    function fn(){

    }
})();
//工作中常用的 互不影响js
(function(){
    function jquery(){
        console.log(1);
    }
    var num=3;
    //通过给window添加这样的属性和属性值，就可以把此方法暴露出去
    window.jquery=window.$=jquery;//把jquery暴露出去给他起一个别名$也可以
})();
jquery();//这样会报错 没有window。jquery
$();