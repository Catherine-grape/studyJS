function fun(){
    this.a=0;
    this.b=function(){
        //this:my_fun
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
};
//my_fun是fun的实例
var my_fun=new fun();
my_fun.b();