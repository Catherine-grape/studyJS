//求1到100中同时能被2整除又能被3整除的所有数之和
var res=null;
for(var i=0;i<=100;i++){
    if(i%2==0&&i%3==0){
        res=res+i;
    }
}
console.log(res);

//
var res=0;
for(var i=1;i<101;i++){
    if(i%2==0&&i%3==0){
    res+=i;
}
}
console.log(res);

var res=[];
for(var i=0;i<101;i++){
    if(i%2==0&&i%3==0){
        res.push(i);
    }
}
console.log(eval(res.join("+")))

function total(n){
    if(n>100){
        return 0
    }
     if(n%2==0&&n%3==0){
        return n+total(n+1)
    } else{
      return  total(n+1)
    }
}
var res=total(1);
console.log(res)