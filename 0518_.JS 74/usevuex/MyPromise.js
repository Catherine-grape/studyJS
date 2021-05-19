class MyPromise {
    constructor(callback) {
        // 当前实例上有state状态，还有成功和失败的事件池子
        this.state = 'pending';
        this.fulfilledEvent = [];
        this.rejectEvent = [];
        let resolveFn = (res) => {
            // 在这里把当前的实例的状态改为‘fulfilled’，在更改之前必须先判断一下状态有没有改过，如果是pending那就允许更改，如果不是就不能更改了
            if (this.state !== 'pending') return;
            this.state = 'fulfilled';
            setTimeout(() => {
                this.fulfilledEvent.forEach(item => {
                    if (typeof item === "function") item(res)
                })
            });
        };
        let rejectFn = (res) => {
            if (this.state !== 'pending') return;
            this.state = 'rejected';
            setTimeout(() => {
                this.rejectEvent.forEach(item => {
                    if (typeof item === "function") item(res);
                })
            })
        };
        try {//防止报错
            callback(resolveFn, rejectFn)
        } catch (e) {
            console.log(e);
            rejectFn(e)
        }

    }
    then(resFn = () => { }, rejFn = () => { }) {
        // this-->p1
        /* this.fulfilledEvent.push(resFn);*/
        // this.rejectEvent.push(rejFn); 
        return new MyPromise((resolve, reject) => {//当前返回的promise就是p2
            // this-->p1
            this.fulfilledEvent.push((res) => {//往p1的事件池子里增加方法
                // 此方法里就是用来书写判断下面的then中的函数该怎么执行的
                console.log('判断下面的then中的回调函数执行的逻辑');
                let x = resFn(res);//p3
                    // p3并不能执行p2事件池子里的方法，但是他可以更改p2的状态「p2的状态一变，p2的事件池子里的方法就发布里」可以说是p3发布的p2的事件在池子里的方法
                x instanceof MyPromise ? x.then(resolve, reject) : resolve();
                // 如果当前第一个回调函数的返回结果，是一个promise实例p3，那咱们就把更改p2的状态的方法订阅到p3的事件池子中，这时候如果p3的状态发生变化里，那对应的p3的事件池子里的方法也会被发布

                // 看一下当前回调函数执行的返回结果是什么东西
                // 1.如果函数的返回结果不是promise的实例，那就让下面的成功的回调函数执行
                // 2.如果函数的返回结果是promise的实例 p3，那下面的then中的回调函数的执行就得受p3 当前状态的管控

            })
            this.rejectEvent.push((res) => {
                let x = rejFn(res);//p3
                x instanceof MyPromise ? x.then(resolve, reject) : reject();
            })
        })
    }
}