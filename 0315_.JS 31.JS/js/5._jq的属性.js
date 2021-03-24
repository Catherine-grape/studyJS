// 选择器 属性 css 文档处理 筛选 事件


console.log($('div .box').attr('ss', 800));//获取当前元素结构上指定属性名对应的属性值（如果传递一个参数就是获取，两个参数就是设置）
// $('div .box').removeAttr('key')

console.log($('div').html('<span>678</span>')); //html不传递参数就是获取元素的内容，传参就是设置元素的内容
console.log($('div').text('<span>123</span>'));//与html一样，区别在于html可以识别字符串的标签，text是不可以的

console.log($('input').val()); //针对于表单元素使用的是val，使用方法和上边的html是一样的  不传参获取，传参设置

// jQuery中的css 
console.log($('div').css('color', 'green')); //如果css执行的时候传递的是一个字符串的值那就是获取 两个参数就是设置
console.log($('div').css({//如果想设置一组样式，那就传递一个对象
    color: 'red',
    width: '200px',
    background:"green"
}));

// offset
console.log($('div').offset().left);//是一个对象 获取距离当前视口的偏移量
console.log($('div').position());//对于父级参照物的偏移量

console.log($('window').scrollTop());//获取不传参  传参就是设置 滚动条卷曲的高度

console.log($('div').height(20));//$('div').css('height','20px')

innerHeight()//获取当前元素的clientHeight
outerHeight()//获取第一个匹配元素的offsetHeight 不传参或者false =offsetHeight  传true 就是加了上下margin



// 文档处理
let div=$('<p></p>')

$('#box').append('<b>Hello</b>');
$('#box').append(div);//父亲。append（儿子）
div.appendTo($('.bn'))//儿子。appendTo（父亲）

$('div').addClass('ss');//所有div都添加ss
// 当前的jq 的实例中有几个元素，那后边的方法就会对几个元素起作用


console.log($('ul li').first());// first/last
console.log($('li').filter('.btn'));// 过滤


console.log($('ul li').eq(0));// 按照索引获取指定的jq的元素
console.log($('ul li').get(0));// 按照索引获取指定的原生的元素


$('ul').children('.btn');//不传参就是ul下面的所有元素子节点  传递实参选择器，更精确的缩小范围
$('div').find('span');//filter是在当前元素里面做过滤  find是在他的里面发现某个符合条件的 找p元素里的span元素

$('#btn').next('.box');//紧邻的同辈元素类名为box的  获取下一个兄弟元素
$('#btn').nextAll('.box');// 获取所有的兄弟元素  所有兄弟元素并且名为box的
/* prev() 获取上一个哥哥元素
prevAll() 获取所有的哥哥元素
parent() 获取父亲元素
parents() 获取所有的父亲元素 
offsetParent() 相当于 offsetparent
silbings() 获取除了自己以外的所有兄弟姐妹元素
*/
$('.box').silbings('span');//获取所有span的兄弟姐妹元素



// 事件
$('ul li').click(function () {//每一个li绑定点击事件
    console.log(1);
})//
function fn() {
    console.log(2);
}
$('ul li').on('click', fn)//绑定事件
$('ul li').off('click', fn)//移除事件  //box.onclick = function () { }; box.onclick = null;

//jquery上的方法都存储到了jquery的原型上  还把一部分方法存储到自己身上了（把自己当作对象来存储的）

// each 既存储到原型上，还存储到了jquery类自己身上
$.each(ary, (index,item) => {
    // 第一个形参是每一项的索引，第二个形参是数组的每一项
    console.log(index,item);
})
$('li').each((index, item) => {
    console.log(item);
})

// type 检测数据类型的
$.type(/s/);//'regext'  null 'null'

