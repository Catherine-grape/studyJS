function fn() {
    console.log(this);
    return 100
}
let obj = { ss: 100 };
function myApply(context,arg=[]) {//es6给形参赋默认值
    // this-->fn context-->obj
    context = context || window;
    context.$fn = this;
   let res= context.$fn(...arg);
    delete context.$fn;
    return res;
}
Function.prototype.myApply = myApply;//挂载，新增
fn.myApply(obj)