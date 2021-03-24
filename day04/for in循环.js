
//for in 循环
var obj={name:"lili",age:18,100:1,0:2}
//key 是你自己起的名字 数字放在前面从小到大 打印属性名
for(var key in obj){
    console.log(key);
}
//变量只能用[] 如果用点的话就变成字符串了 也不能用数字 打印属性值
for (var key in obj){
    console.log(obj[key]);
}

//for 常用
for(var i=1;i<5;i++){
    console.log(i);
}

//
var num=1;
//while循环，不能让它一直是true是true就一直走循环体里面的语句（制定循环条件）  常用
while(num>0&&num<5){
    //制定循环规则
    num++;
    console.log(num);
}

//不常用 无论条件是否成立，一上来就会先执行一次循环体里面的语句  不管你条件是否成立都会先执行一次do 
var num1=0;
do{
    console.log(num);
}while(num1>0);