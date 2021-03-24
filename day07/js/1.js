var str="https://www.baidu.com?name=zhufeng&age=10&id=14";

//带参数 进行链接 有属性名属性值用&链接 把他们拿出来

function getParams(str){
    var obj={};
    var res=str.split("?")[1];
    //这个值存在 在执行
    if(res){
        var item=res.split("&");
        for(var i=0;i<item.length;i++){
            var time=item[i];
            var key=time.split("=")[0];
            var value=time.split("=")[1];
            //是一个变量所以只能用obj[key] 
            obj[key]=value;
        }
    }
    return obj;
}
var params=getParams(str);
console.log(params);