function A() {
    this.x = 100;
    this.y = 100;
}
function B() {
    // this-->f
    this.d = 300;
    A.call(this);//call会让A函数以普通函数的身份运行，并且把A函数的this指向了类B的实例f
    // 只能继承私有属性
}
let f = new B;//{d:300,x:100,y:200}
console.log(f);