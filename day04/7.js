//es6 箭头函数  就是那个function省去用=》代替  如果参数只有一个可以省去（）如果只return一个值 那么{}也可以省去  但是箭头函数没有arguments 也没有this， 但是 它当前没有找到的话会向上查找
var fn=function(x,y){
    return x+y
}


var fn=(x,y)=>{
    return x+y;
}

var fn=x=>{
    return x;
}

var fn=x=>x

//... 剩余运算符 也叫展开 拓展运算符
var fn1=(...arg)=>{
    console.log(arg);
    // console.log(arguments);
    // return x+y;
}
fn1(1,2)