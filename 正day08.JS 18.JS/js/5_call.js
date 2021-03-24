//call apply bind 都属于Function（类） 原型上的方法
function fn(){
    console.log(this,arguments)
    return 123000
}
//call apply bind 是 函数类的原型上的方法
var obj={a:123}

fn.call(obj,1,2,3,4)
//call 执行的时候 它里面的this 是谁？
// this是fn call点前面是谁 this就是谁  
//call中的this 就是fn
// call的作用是 让fn 执行 并且把fn中的this换成obj
// 让fn执行的前提是 需要获取到fn (call中的this 就是fn)(this ())==>(fn ())  obj.fn()

Function.prototype.mycall=function(ctx,...arg){//里面的...是扩展运算符=》...[1,2,3,4]
    //this-->fn
    //this(...arg);//这个直接就是window
    //扩展运算符 ...[1,2,3,4]-->1,2,3,4
    //为什么这么写？ 是为了通过点调用的方式 实现函数中的this是obj
    //ctx新增了一个qqq的属性存储this  ctx.qqq就是fn
    ctx.qqq=this;
    let r=ctx.qqq(...arg);
    delete ctx.qqq;//输出的时候有qqq 为什么点开没有了 因为输出的时候还没有删除
     return r;
}
let res2=fn.mycall(obj,1,2,3,4);
console.log(res2);//undefined 没有返回结果


//函数中的this一旦被call 或者apply或者bind修改过之后 就不会再发生改变
function f1(){
    console.log(1,this)
}
function f2(){
    console.log(2,this)
}
f1.call.call(f2);//第二个call执行是把f1.call这个函数中的this换成this-》f2  然后让f1.call执行
//f1.call执行把里面的this换成f2
//call执行 其实就是让内部this执行

var obj4={a:11}
let f3=f1.bind(obj4)
f3.call([])//不管用了