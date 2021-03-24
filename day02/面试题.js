// typeof [] "object"
// 这个先算里面typeof[]为 ==>"object"==>typeof"object"==>"string"
// typeof typeof [] typeof"object" "string"

//只要有两个或者两个以上，得到的结果一定是字符串的“string”


var num=parseInt("px35.5");
if(num==35.5){
    alert(0)
}else if(num==35){
    alert(1)
}else if(num==NaN){
    alert(3)
}else if(typeof num=='number'){
    alert(4)
}else{
   alert(5)
}
alert(4);