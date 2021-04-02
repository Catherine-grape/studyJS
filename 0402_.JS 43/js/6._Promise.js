/* 
ES6
Promise内置的一个类，当new Promise的时候可以传递一个回调函数，而且这个回调函数会马上执行，这个回调函数也会有两个形参，分别是resolve函数和reject函数
Promise拥有三个状态 pending、fulfilled、rejected。状态一旦发生变化，就会凝固只能更改一次
*/
let p1 = new Promise((resolve, reject) => {
    
});
console.log(p1);

class MyPromise{
    constructor(callback) {
        // this-->p2
        this.status = "pending";//promise实例初始化的时候默认的状态是pending等待态
        this.fulfilledEvent = [];//往当前实例上新增一个成功的事件池子
        this.rejectedEvent = [];//往当前实例上新增一个失败的事件池子
        // 如果当前的callback不是一个函数
        if (typeof callback !== "function") {
            throw new Error('callback is not a function');
        }
        
        let resolve = (res) => { 
            // resolve函数做的两件事
            // 1. 把当前状态改为成功态（同步）
            // 2. 去发布成功的事件池子里的方法（异步）
            // 如果当前状态不是等待态说明被该国里
            if (this.status !== "pending") {return}
            this.status = "fulfilled";
            setTimeout(() => {
                // 发布 this-->p2
                // 找到对应的事件池子，然后循环池子里的每一个方法并且去执行他
                this.fulfilledEvent.forEach((item)=>{item(res)})
            },0)
        };
        let reject = (rej) => {
            if (this.status !== "pending") { return };
            this.status = "rejected";
            setTimeout(() => {
                // 发布 this-->p2
                // item 是事件池子里的每一项
                this.rejectedEvent.forEach((item) => { item(rej) });
            }, 0)
        };
        // 当callback执行的时候，给他传递两个实参函数，分别是resolve（成功）, reject（失败）的函数
        callback(resolve, reject);
    }
    then(resFn=()=>{},rejFn=()=>{}) {
        //this--》p2
        if (typeof resFn == "function" && typeof rejFn == "function") {
            this.fulfilledEvent.push(resFn);//往成功的事件池子里订阅方法
            this.rejectedEvent.push(rejFn);//往失败的事件池子里订阅方法
        }
        
    }

}
let p2 = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(100)
    },3000)
    console.log(resolve, reject);
});

// 当then执行的时候，就是往对应的事件池子里增加方法 then是同步的then执行也是同步的 then里面的回调函数执行是异步
p2.then((res) => {
    console.log("成功");
    console.log(res);
}, () => {
    console.log("失败");
})
console.log(1);