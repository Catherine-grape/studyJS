/* 了解一下 工作不用 不是重点 */
function fn(){
    //arguments.callee指的是当前这个函数 一般不用
    console.dir(arguments.callee);
    //获取此函数执行时候的宿主环境，如果fn在window下执行，得到null，如果在A函数里面执行，得到就是A(){fn();}
    console.log(arguments.callee.caller);
}
//fn();

function A(){
    fn();
}
A();