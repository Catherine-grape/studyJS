let p1 = new Promise((reason, reject) => {
    setTimeout(() => {
        reason(1)
    }, 1000)
});
let p2 = new Promise((reason, reject) => {
    setTimeout(() => {
        reason(2)
    }, 2000)
});
let p3 = new Promise((reason, reject) => {
    setTimeout(() => {
        reason(3)
    }, 3000)
});

/* let res = Promise.all([p1, p2, p3]);//res也是Promise的实例  当传递的p1、p2、p3的实例的状态全都变成成功态以后，res的状态就会变成成功态，或者当p1、p2、p3有一个是失败态的时候，res的状态就是失败态

res.then((res) => {
    console.log('成功',res);
}, (res) => {
        console.log('失败',res);
}) */

// Promise.race()  
// 用法与all类似，当p1、p2、p3中有一个状态改变了，那race实例的状态就会跟着发生变化
/* let res = Promise.race([p1, p2, p3]);
res.then((res) => {
    console.log('成功',res);
}, (res) => {
        console.log('失败',res);
}) */

// Promise.allSettled();res的状态会等到上边的p1、p2、p3的轧辊态全部改变之后，才会改变为成功态，监测上面是否执行完毕。
/* let res = Promise.allSettled([p1, p2, p3]);
res.then((res => {
    console.log('成功', res);//0: {status: "fulfilled", value: 1} 返回数组中三个对象
    // res是一个数组，数组里面存放的是每一个实例的状态和传递的值
}), (res) => {
        console.log('失败', res);
}) */


//Promise.any();捕捉成功态，如果所有都是失败态 才会变成失败态
let res = Promise.any([p1, p2, p3]);
res.then((res => {
    console.log('成功', res);
}), (res) => {
        console.log('失败', res);
})

// Promise.resolve();快速创建一个成功的实例
// let res=Promise.resolve(100) 与下面是等价的
let res = new Promise((res, reject) => {
    res(100)
});

// Promise.reject(100);快速创建一个失败的实例
let res = new Promise((res, rej) => {
    rej(100)
});


