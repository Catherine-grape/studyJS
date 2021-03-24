// 发布订阅
// 发布订阅是一种思想 某种代码的体现形式  //订阅（关注）推送消息
// DOM2级事件绑定
/* let box = {
    'click': [fn,fn1],
    'mouseup': [],
    //...
}
box.addEventListener('click', fn); *///给box订阅click方法  当click触发执行的时候 发布fn
// 当用户调用addEventListener 的时候 就是往当前元素的对应的事件类型的池子里订阅方法
// 当满足用户点击这个元素的时候，就去把对应的事件池子里的方法 发布（执行）

/* 

box.addEventListener('click', fn);// 同一个函数只放一次，不同函数会放两个
box.addEventListener('click', fn);
*/



let box = {//事件池子
    // 'fangxue':[fn1]

}

// 放学之后（事件）  吃饭  学习  睡觉
function fn1() {
    console.log('吃饭');
}
function fn2() {
    console.log('学习');
}
function fn3() {
    console.log('睡觉');
}

// on() 订阅  emit() 发布  off()取消
// 订阅 on
function on(obj, type, fn) {
    // 在box对象中新增放学类型的事件池
    // box.fangxue.push(fn1)
    if (!obj[type]) {//判断池子是否有这个属性名，创建一次就可以  不然会重复覆盖  这样可以为fangxue增加多个属性值
        // 如果当前数组不存在，再创建新数组，如果已经存在直接使用
        obj[type] = [];//obj.fangxue=[]  
    }
    let pool = obj[type];
    let res = pool.includes(fn);
    if (!res) {
        pool.push(fn);
    } 
    /* let res = pool.find((item) => {
        return item === fn;
    });
    if (!res) {
        pool.push(res);
    } */
    /* let res = pool.some((item) => {
        return item === fn;
    });
    if (!res) {
        pool.push(res);
    } */
   /*  obj[type] = obj[type].filter(item => {
        return item != fn;//fn=fn1 [fn1,fn2]
    })
    //[fn2,fn1]
    pool.push(fn); */
    
    /* for (let i = 0; i < pool.length; i++){
        let item = pool[i];
        if (item == fn) {
            /!* pool.splice(i, 1);
            i--; *!/
            pool[i] = null;
        }
    }
    pool.push(fn); */
}
// off
function off(obj,type,fn) {
    let pool = obj[type];
    console.log(pool);
    pool= pool.filter(item => {
        return item !== fn;//fn=fn1 [fn1,fn2]
    })
    obj[type] = pool;
}

// 发布 emit
function emit(obj,type) {
    // 得到当前type对应的事件池子
    let pool = obj[type] || [];//赋一个默认值
    // 循环事件池子，让池子里的每一项执行
    pool.forEach(item => {
        if (typeof item == 'function') {
            item();
        }
    });
}

on(box, 'fangxue', fn1)
on(box, 'fangxue', fn2)
on(box, 'fangxue', fn1)
console.log(box);
setTimeout(() => {
    emit(box, 'fangxue');
},5000)

off(box, 'fangxue', fn1);
console.log(box);
/* 
function fn1() { }
box.addEventListener('click', fn1, true);
box.removeEventListener('click', fn1, false);//这样是不能移除的  冒泡是冒泡  捕获是捕获 两个事件池子 绑定与移除要一摸一样 */