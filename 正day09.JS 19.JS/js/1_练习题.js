function Fn(){
    this.x=100;
    this.y=200;
    this.getX=function(){
        console.log(this.x)
    }
}
Fn.prototype={
    y:400,
    getX:function(){
        console.log(this.x)
    },
    getY:function(){
        console.log(this.y)
    },
    sum:function(){
        console.log(this.x+this.y)
    }
};
var f1=new Fn();//后面有没有东西对于小括号有优先级问题 如果有就是先new fn（） (x,y,getX) 
var f2=new Fn; //   (x,y,getX) 
console.log(f1.getX===f2.getgetX);//false
console.log(f1.getY===f2.getgetY);//true
console.log(f1.__proto__.getY===Fn.prototype.getY);//true
console.log(f1.__proto__.getX===f2.getX);//false
console.log(f1.getX===Fn.prototype.getX);//false
console.log(f1.constructor);//Object
console.log(Fn.prototype.__proto__.constructor);//Object
f1.getX();//this->f1 this.x->f1.x->100
f1.__proto__.getX();//this->f1.__proto__->Fn.prototype  this.x->Fn.prototype.x->undefined
f2.getY();//this->f2 f2.y->200
Fn.prototype.getY();//this->Fn.prototype;Fn.prototype.y->400
f1.sum();//this->f1 f1.x+f1.y  300
Fn.prototype.sum();//this->Fn.prototype  Fn.prototype.x+Fn.prototype.y  undefined+400->NaN



function Person(){
    this.name='zhufeng'
};
Person.prototype.getName=function(){
    console.log(this.name)
    console.log(this.age)
};
Person.prototype.age=5000;
var per1=new Person;
per1.getName();//‘zhufeng’ 5000
per1.age=9;
per1.getName();//‘zhufeng’ 9
console.log(per1.age);//9
var per2=new Person;
console.log(per2.age);//5000



var num=10;//60 65
var obj={
    num:20//30
};
obj.fn=(function(num){//num 20 21 22 23
    this.num=num*3;//window.num=60
    num++;
    return function(n){
        this.num+(n);
        num++;
        console.log(num);
    }
})(obj.num);
var fn=obj.fn;
fn(5);//this->window ->22
obj.fn(10);//this->obj ->23
console.log(num,obj.num);//->65 30