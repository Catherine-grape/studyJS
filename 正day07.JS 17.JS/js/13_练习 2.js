function fun(){
    this.a=0;
    this.b=function(){
        alert(this.a);
    }
}
fun.prototype={
    b:function(){
        this.a=20;
        alert(this.a);
    },
    c:function(){
        this.a=30;
        alert(this.a)
    }
}
var my_fun=new fun();//私有属性a，b
my_fun.b();//0 调用私有属性b b对应的函数中的this是my_fun，this.a就是my_fun.a
my_fun.c();//30 c 不是私有属性，去原型上去找到c属性对应的函数，c函数中的this 也是my_fun.a=30

fun.prototype.b();//20 找到了原型上的b函数 这个执行b中的this是原型 也就是相当于原型上加了个a属性
my_fun.b();//30 找到了私有的b函数，这个执行中的this 是实例my_fun，输出的就是my_fun.a
fun.prototype.c();// 30 找到了原型上的c函数 这个执行c中的this是原型 也就是相当于原型上的a属性变成了30
my_fun.b();//私有的 30
//alert 阻碍代码更新