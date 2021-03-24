// jQuery是一个构造函数，是一个类。jq中的一部分方法存储到类的原型上了，还有一部分方法存储到自己类的身上了  window.jQuery===$  window.$===jQuery
// each 既可以循环数组，对象
let obj = {
    a: 1, b: 2, c: 3
};
// each 循环数组、对象、类数组
$.each(obj, (index, item) => {
    console.log(index, item);//index:a,b,c  item:1,2,3
});
$('div').each((index, item) => {
    console.log(item);//原生的dom对象，如果想使用jq原型上的方法那就把它转换成jq版 $();
})

//$()   使用的几种方法
$('div');//字符串 选择器
$('<div>1</div>');//以后使用的时候，内部就会把字符串的标签转换成真正的元素
$(原生的dom对象)//可以把原生的dom对象转换成jq的实例


