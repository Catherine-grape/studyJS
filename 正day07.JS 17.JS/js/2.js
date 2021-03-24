function fn(a,b){
    console.log(a+b);
    console.log(arguments);//100,200,400,500,600
    console.log(this)
}
var obj2={
    f:fn
}
obj2.f(1,2)//this->obj2
var f2=obj2.f;
obj2.f.call([1,2,3],100,200)//call的第二个参数及以后都是传给函数的实参 离散


obj2.f.apply([1,2,3],[100,200]);//call与apply的唯一区别 就在于call是离散的传递实参 apply是以一个数组的形式传递实参
var f3=obj2.f.bind([1,2,3],100,200)
//bind的用法和call写法是一样的，但是call是让函数执行 bind是返回了一个新的函数，并且新的还书的执行的时候，其中this是执行bind的第一个函数
f3();//100，200属于给obj2.f的默认参数
f3(400,500,600);//f3执行再传递的参数会排在默认参数的后边。相当于让obj2.f执行并且把this改成[1,2,3]，传递的实参是100，200，400，500，600