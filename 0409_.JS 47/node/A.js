let a = 100;
function fn() {
    console.log(111);
}
console.log("A模块执行了");
module.exports = {//exports导出  当前 变量return 出去  js中
    a: a,
    fn
}

/* let ModuleA = (function () {
    let a = 100;
    return {
        a
    }
});
ModuleA().a */
    
