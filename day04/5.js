//求未知个数的和

function fn(){
    //声明一个变量 先定义上res 从0 开始   res就是最终要的和
    var res=0;
    for(var i=0;i<arguments.length;i++){
        //res=res+arguments[i];  
        //i=0  res=0+1=1    i=1 res=res+2=1+2=3   i=2 res=3+3=6
        res+=arguments[i];
    }
    return res;
}
var res=fn(1,2,3,4);
var res=fn(1,2,3,4,5,"12","12px");

/* function fn(){
    var res=0;
    for(var i=0;i<arguments.length;i++){
       Number(res);
       这里思考错误
        if(res==isNaN){
            i++; 
        }else{
            res+=arguments[i];
        }
    }
    return res;
}
fn(); */


//讲解
function total(){
    var res=0;
    for(var i=0;i<argunments.length;i++){
        //转成数字
        var item=Number(arguments[i]);
        //如果是有效数字，再累加
    //    if (isNaN(item)==false)
    if(!isNaN(item)){
        res=res+item;
    }
    }

}

