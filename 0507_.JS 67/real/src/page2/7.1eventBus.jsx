let obj = {};
function $on(type, fn) {

    obj[type] = [];//给当前type事件类型增加对应的池子
    if (!obj[type]) {
        // 先判断一下当前obj中有没有type这个类型的池子，如果没有再新增池子，如果有就不要再新增了
        obj[type] = []
    }
    let pool = obj[type];//把fn方法订阅到池子里
    pool.push(fn);

};
function $emit(type, value) {
    let pool = obj[type] || [];//获取对应的事件池子
    pool.forEach(item => {
        if (typeof item != "function") return;
        // 循环让池子里的方法去执行
        item(value)
    })
};
const eventBus = {
    $on,
    $emit

}
/* 用法
eventBus.$on('change',fn1);
eventBus.$emit('change',100); */
export default eventBus;
// 缺点是一个修改后，第二个当中的也会被修改。把事件车放到一个共同的父亲上