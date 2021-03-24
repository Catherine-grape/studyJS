function fn1() { console.log(1) }
function fn2() { console.log(2) }
fn1.call(fn2);
fn1.call.call(fn2);
Function.prototype.call(fn1);
Function.prototype.call.call(fn1);
Function.prototype.call.call.call(fn1);

// 源码简单实现
function myCall(context) {
    // fn1.call(fn2);
    //this -->fn1 context-->fn2
    context.$fn = this;//fn2.$fn=fn1
    context.$fn();//fn2.$fn()-->fn1()
    // -------------------
    // fn1.call.call(fn2);
    // this-->fn1.call-->call//.是通过__proto__找到原型上的call方法
    // context-->fn2

    // fn2.$fn=call
    // fn2.$fn()-->call()
    // 下面让call二次执行

    // this-->fn2 context=window
    // window.$fn=fn2
    // window.$fn()-->fn2()

    // -----------------------------------
    // Function.prototype.call(fn1);
    // this--->Function.prototype
    // context-->fn1
    // fn1.$fn=Function.prototype
    // context.$fn();-->Function.prototype()-->undefined
    // --------------------------
    // Function.prototype.call.call(fn1);
    //this--->Function.prototype.call--->call
    // context--->fn1
    //context.$fn=this;//fn1.$fn=call
    // context.$fn();//fn1.$fn()-->call()
    //下面让call二次执行--------
    //this-->fn1  context-->window
    //context.$fn=this;//window.$fn=fn1
    // context.$fn();//window.$fn()-->fn1()

}
Function.prototype.myCall = myCall;


// ---------------------------
// call的两次执行
// fn2.call.call(fn1);
// this-->fn2.call-->所属类原型上的call context-->fn1
// context.$fn=this//fn1.$fn=call
// context.$fn();//fn1.$fn()-->call()
// call第二次执行
// this-->fn1 context-->window

// context.$fn = this;//window.$fn=fn1
// context.$fn();//window.$fn()-->fn1()
// 