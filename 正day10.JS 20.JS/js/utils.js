var util=(function(){
    function toArray(likeAry){
        return Array.from(likeAry)
    }
    function average(){
        // arguments 是一个类数组 需要转成数组
    // 为什么要转成数组 因为数组可以通过排序删除最大和最小值
    let ary=toArray(arguments);
    ary.sort((a,b)=>{return a-b})
    ary.pop();//删除最大值
    ary.shift();//删除最小值
    return eval(ary.join("+"))/ary.length//平均
    }

    
    return{
        // toArray:toArray 属性名与属性值一致可以简写为下面的
        toArray,
        average
    }
})();
