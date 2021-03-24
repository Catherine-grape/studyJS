let len = 10;//let 不会给window增加键值对
// 函数执行的时候this指向
function fn() {
    console.log(this.len)
}
fn();
let Person = {
    len: 5,
    say: function () {
        fn();
        arguments[0]();
    }
}
Person.say(fn);




function fun() {
    this.a = 0;
    this.b = function () {
        alert(this.a);
    }
}
fun.prototype = {
    b: function () {
        this.a = 20;
        alert(this.a);
    },
    c: function () {
        this.a = 30;
        alert(this.a)
    }
};

var my_fun = new fun();
my_fun.b();//0
my_fun.c(); //30
fun.prototype.b(); //20
my_fun.b(); //30
fun.prototype.c(); //30
my_fun.b(); //30