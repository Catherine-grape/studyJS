let num1=1;//不能重复声明，var灵活的代价是散乱
num='';
const num2=2;

function fn(a,b,...c){
    //...在函数的形参中 称为 剩余运算符
    console.log(this);

    console.log(a,b,c)
}
fn(1,2,3,4,5,6,7);//a=1,b=2,c=[3,4,5,6,7]
fn.call([666]);//[666]

var fn3=(a,b,...c)=>{
    //箭头前面形参 箭头后面是函数体
    //两个明显特点 没有this，this这个关键字，在箭头函数当中，就把它当成一个普通变量即可
    // 没有arguments,压根就没有，一用就报错
    console.log(this);
    console.log(a,b,c);
}
fn3(1,2,3,4,5,6,7);//a=1,b=2,c=[3,4,5,6,7]
fn3.call([666]);//window的this 就是window
