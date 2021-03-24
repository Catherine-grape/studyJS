// _once 让函数只执行一次，以后不会再执行
function once(fn) {
    let flag = false;
    return function () {
        if (flag) {
            return;
        }
        flag = true;
        fn();
    }
}

function fn() {
    console.log(1);
}
let res = _.once(fn);
btn.onclick = res;

