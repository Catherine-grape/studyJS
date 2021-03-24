/* 
promise的应用
promise解决的问题就是使异步的代码以同步的方式展现出来从而解决异步地狱回调的问题（不然异步代码以同步方式只能使用嵌套）
个人写了一个promise放在github上  es6觉得很好就放到里面了
promise是es6新增的一个类
参数支持一个回调函数，并且马上执行。回调函数有两个形参 实参在Promise内部传的
当promise执行的时候，允许传递一个回调函数，而且这个回调函数会在promise内部马上执行，这个回调函数还有两个形参，形参对应的值分别是两个函数
promise本质就是一个状态机，创建的promise实例有三种不同的状态，分别是等待态（pending）成功态（fulfilled）失败态（rejected）
创建promise实例默认是等待
当resolve执行的时候，会把当前的状态从pending-->fulfilled    [[PromiseState]]:"fulfilled"
当reject执行的时候，会把当前的状态从pending-->rejected       [[PromiseState]]:"rejected"
promise实例的状态一旦发生变化就会凝固，不可能再改变了（状态只能更改一次）
*/
let res = new Promise((resolve,reject) => {
    resolve();//pending--->fulfilled
    reject(); // pending-->rejected
    console.log(resolve);
    console.log(reject);
});
let res = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();//pending--->fulfilled
    }, 3000);
});

/* 
在promise类的原型上，有一个then方法，实例可以调用（是方法就可以执行），可以传两个函数
当then方法执行的时候可以传递两个回调函数
当 当前的promise实例的状态变成成功态以后，then的第一个回调函数就会执行，当pro实例的状态变成失败态以后，then的第二个回调函数就会执行（回调函数的执行是异步的），是在then的内部执行

*/
res.then(() => {
    console.log(1);
}, () => { 
        console.log(2);
 });
console.log(3);//3会先输出，先同步后异步

//就是让异步有先后顺序的代码以 同步的方式展现出来 （本质还是异步的）




let res = new Promise((resolve, reject) => {
    $.ajax({
        url: 'xxx',
        async: true,
        success: (res) => {
            resolve(res);//pending--->fulfilled
        }
    })   
});
res.then((res) => {//第一个请求成功后 第二个请求开始
    $.ajax({
        url: 'xxx',
    });
}, () => {
    
});





// 用定时器模拟ajax
let res = new Promise((resolve, reject) => {
    setTimeout((res) => {
        console.log("请求成功了");
    }, 3000);
});
res.then((res) => {//第一个请求成功后 第二个请求开始
    console.log(res);//"请求成功了"
}, () => {

});


// promise 回顾 
let res = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(100);//传参
    },3000)
});
console.log(3);
res.then((res) => {//等待所有同步代码完成后 执行异步代码  形参接收  
console.log(1,res);//成功 1,100
}, () => { 
    console.log(2);  //失败  
});
console.log(4);
 




let res = new Promise((resolve, reject) => {
    $.ajax({
        url: 'xxx',
        async: true,
        success: (res) => {
            resolve(res);//pending--->fulfilled
        },
        error: ()=>{
            reject();
        }
    })
});
res.then((res) => {//第一个请求成功后 第二个请求开始
    $.ajax({
        url: 'xxx',
    });
}, () => {
    // 当前请求失败，请重试
});




// 用定时器模拟ajax  两个then的时候

let res = new Promise((resolve, reject) => {
    setTimeout((res) => {
        console.log("第一请求");
        resolve(100);
    }, 3000);
});
res.then((res) => {//第一个请求成功后 第二个请求开始  then的返回值还是promise实例
    console.log(1,res);//"请求成功了"
    return 200;//如果当前函数执行的时候return的不是一个新的promise实例，那下边的then中就会默认执行第一个回调函数
}, () => {

}).then(() => { //上个then执行完毕 第二个then（现在这个）执行   上一个then没有return 或者return的不是一个新的promise实例 那就默认执行第一个回调函数（也就是成功的那个）
    console.log(3);//如果上面没有return新的promise实例的话   状态是reject 下面的then（第二个then） 也是执行成功的
    // 如果当前函数执行的时候 return是一个新的promise的实例，那下个then（第二个then）中的回调函数的执行就会受到新的promise实例状态的管控
}, () => { 
        console.log(4);
});


//两个then 返回的promise新的实例

let res = new Promise((resolve, reject) => {
    setTimeout((res) => {
        console.log("第一请求");
        resolve(100);
    }, 3000);
});
res.then((res) => {//第一个请求成功后 第二个请求开始  then的返回值还是promise实例
    console.log(1,res);//"请求成功了"
    return new Promise((resolve, reject) => {
        console.log('第二个请求成功');
        resolve('dididi');
    });//如果return 新的Promise实例 那么下面那个then就受到当前这个新的promise实例的状态影响
}, () => {

}).then((item) => { //看上一个then里面return 新的promise实例 的状态
console.log(3,item);//3 dididi
}, () => { 
       
});
