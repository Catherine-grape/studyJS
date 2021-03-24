//问号传参  网址后面有问号直接写对象 没有的需要写？  &符链接参数  getParams获取参数!!!! 把url地址获取参数那个方法写会，冒泡排序

var str="https://www.baidu.com?name=zhufeng&age=10&id=14";
var obj={
    name:"zhufeng",
    age:10,
    "id":14,
}
var res=str.split("?");
var rightAry=res[1];
var key=rightAry.split("=");
var kk=key.join(":");
var as=kk.split("&");


function getParams(str){
    var res=str.split("?");
    var rightAry=res[1];
    var key=rightAry.split("=");
    var kk=key.join(":");
    var as=kk.split("&");
    var er={}
    for(var i=0;i<=as.length;i++){
        er=as[i];
    }
    return{
        er
    }
}

var str="https://www.baidu.com?name=zhufeng&age=10&id=14";

function getParams(str){
    var obj={};
    //["https://www.baidu.com","name=zhufeng&age=10&id=14"]
  var params=str.split("?")[1];
  if(params){
    var paramsAry=params.split("&");//["name=zhufeng","age=10","id=14"]
    for(var i=0;i<paramsAry.length;i++){
        //i=0 item="name=zhufeng"
        //i=1  "age=10"
        //i=2    "id=14"
        
        var item=paramsAry[i];
        var key=item.split("=")[0];//["name","zhufeng"]
        var value=item.split("=")[1];
        obj[key]=value;
       // obj["name"]=100;
    }
  return obj;


  }
}

console.log(obj.name);
console.log(obj.age);
console.log(obj.id);
//拿到参数后，需要给到后台 接口的 学到ajex的时候就懂了


var str="https://www.baidu.com?name=zhufeng&age=10&id=14";

function getParams(str){
    var obj={};
    var params=str.split("?")[1];   
    if(params){
        var paramsAry=params.split("&");
        for(var i=0;i<paramsAry.length;i++){
            var item=paramsAry[i];
            var key=item.split("=")[0];
            var value=item.split("=")[1];
            obj[key]=value;
        }
    return obj;
}
}