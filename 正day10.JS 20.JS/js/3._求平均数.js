function add(...arg){
    // arguments 是一个类数组 需要转成数组
    // 为什么要转成数组 因为数组可以通过排序删除最大和最小值
    let ary=toArray(arguments);
    ary.sort((a,b)=>{return a-b})
    ary.pop();//删除最大值
    ary.shift();//删除最小值
    return eval(ary.join("+"))/ary.length//平均
}

console,log(util.average(123,323,43,2345,23423,432,67,786))