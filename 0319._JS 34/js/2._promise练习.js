let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    });
    reject()
});
console.log(1);

p1.then(() => {
    console.log(2);
    return 100;
    return new Promise((res, rej) => { rej() });
}, () => {
    console.log(3);
    return new Promise((res, rej) => { });
    return 200;
}).then(() => {
    console.log(4);
}, () => {
    console.log(5);
});
console.log(6);


/* 
promise一般配合ajax使用 

catch promise 原型上的一个方法，他就是捕获错误 
then / catch /finally 里面的回调函数都是异步的
*/

let p1 = new Promise(() => {
    //reject();
    resolve();
});
p1.then(() => {
    console.log(1);
return new Promise((res,rej)=>{rej()})
}).then(() => {
    console.log(2);
}).catch(() => {    //最后写catch  只要有then失败了 最后catch给兜底  then只写一个回调函数接收成功的就可以了
    console.log(3);//3
}).finally(() => {//不管上面最后成功还是失败 都会走
    // 不管上边是什么状态，最后这个finally里的回调函数都会最后执行
    console.log(5);
})
