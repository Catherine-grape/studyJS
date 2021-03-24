// jQuery是一个构造函数，在它的内部给window增加了一个键值对
//window.$=jQuery
//以后再使用jq 的时候都是$()-->new jq-->jq的实例

let $div = $('#btn');
// $()的返回值是jq的实例，也是一个元素集合，原生的dom元素就在里边
$div.addClass = ('box');
console.log($div[0]);



console.log($('ul .box'));

console.log($('.box,#bn,.ox,i'));//可以使用多组条件去获取元素

console.log($('li:eq(3)'));//按照索引找到指定的元素

console.log($('li:gt(2)'));//匹配所有大于给定索引值的元素

console.log($('li:lt(1)'));//匹配所有小于给定索引值的元素

console.log($('li:parent'));//获取含有子元素或者文本的元素（匹配的元素中必须含有东西）