var n=10;
function fn(){
    var n=20;
    function f(){
        n++;
        console.log(n);// 21 22 23
    }
    f();
    return f;
}
var x=fn();
x();
x();
console.log(n);//10