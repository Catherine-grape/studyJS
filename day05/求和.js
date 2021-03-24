//求1到100的所有数之和
var res=0
for(var i=0;i<101;i++){
    res=res+i;
}
console.log(res);

var res=1;
for (var i=2;i<=100;i++){
    res+=i;
}
console.log(res);

function total(x,y){
    var res=x;
for (var i=2;i<=y;i++){
    res+=i;
}
return res;
}
console.log(total(1,100));

function total(n){
    //n=1的时候
    if(n>100){
        //到101的时候 就+0
        return 0;
    }
    //n《100的时候===》return  1+total(2)===》2+total（3）===》3+total（4）===》4+total（5）。。。。99+total（100）===》100+total（101） 然后就是1+2。。+99+100+101进到 if里面然后 return+0 就是从1-100
  return  n+total(n+1)
}
total(1);