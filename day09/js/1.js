
function fn() {
    var res = null;
    for (var i = 0; i < 101; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            res = res + i;
        }
    }
    return res;
}
var item = fn();
console.log(item);

var str="2019-8-18 12:32:18";
var res="";
  var strAry=str.split(" ");
  for(var i=0;i<strAry.length;i++){
    var leftAry=strAry[0].split("-");
    var rightAry=strAry[1].split(":");
    for(var i=0;i<leftAry.length;i++){
        var res=leftAry[0]+"年"+leftAry[1]+"月"+leftAry[2]+"日"+""+rightAry[0]+"时"+rightAry[1]+"分"+rightAry[2]+"秒";
    }  
  }
  console.log(res);
  
  
  