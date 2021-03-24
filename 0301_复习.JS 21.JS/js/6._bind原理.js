function fn(a,b,c,d) {
    console.log(this);
    return 100;
}
let obj = { ss: 100 };
function myBind(context,...arg) {
    // myBind执行形成的私有作用域不销毁，那作用域里的形参或者私有变量就会被一直保存下来
    //this-->fn context-->obj
    let _this = this;//fn
    return function (...ary) {
        let ss = [...arg, ...ary]
        // [1,2] [3,4]  [1,2,3,4]
        // 此函数执行的是上一级作用域就是没有销毁的myBind形成的作用域
        let result = _this.call(context,...ss);//或者用箭头函数，箭头函数没有this 向上级查找
        // result就是把call的执行结果接收一下，然后再return出去
        return result;//符合它的返回结果
    }
}
Function.prototype.myBind = myBind;
let res = fn.myBind(obj,1,2);
res(3,4);//这句话会让fn执行，并且把fn的this指向obj