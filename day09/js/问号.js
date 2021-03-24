var str="https://www.baidu.com?name=zhufeng&age=10&id=14";

function getParmas(str){
    var obj={};
    var parmas=str.split("?")[1];
    if(parmas){
        var res=parmas.split("&");
        for(var i=0;i<res.length;i++){
            var item=res[i];
            var key=item.split("=")[0];
            var value=item.split("=")[1];
            obj[key]=value;
        }
    }
    return obj;

}
var tatol=getParmas(str);
console.log(tatol);
