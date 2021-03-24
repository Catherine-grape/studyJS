// 以前用的多问的多  现在很多方式都可以转，不怎么问了
// 类数组 类似数组  元素集合（querySeletorAll、document.getElementsTagName……）   实参集合（arguments）
function add(...arg){
    // return eval(arguments.join("+"))
    return eval(toArray(arguments).join("+"))
}
function toArray(likeAry){
    // 把类数组转成一个数组 然后返回
    // 创造一个数组 然后把类数组中的每一项都挪到数组中，然后返回创造的数组
    /* let ary=[];
    for(let i=0;i<arguments.length;i++){
        let res=arguments[i];
         ary.push(res);
    }
    return ary */
    let res=[];
    for(let i=0;i<likeAry.length;i++){
        res.push(LikeAry[i]);
    }
    return res;
}
//王涵方法
/* function toArray(likeAry){
    var ary=[];
    for(let i=0;i<likeAry.length;i++){
        ary.push(likeAry[i])
    }
    return ary
} */

function toArray2(LikeAry){
    // 数组本身有个方法 slice 可以用来复制数组slice+call
    return Array.prototype.slice.call(likeAry,0)
}

function toArray3(likeAry){
    //静态属性 直接把类当作对象 添加的属性 与原型上的属性是两个走向  原型是类的实例可以调用 静态属性是类本身上的属性  它与prototype是兄弟
    // Array 的静态属性from 是es6之后新增的方法 可以把类数组转成数组
    // Array.isArray（） 专门用来判断一个引用数据类型是否是一个数组 返回值布尔数据类型  true就是一个数组
    // 工具函数 不涉及到业务逻辑 普通的工具实现 一般放到 util/utils /tool 工作中这些文件名都是工具函数
    return Array.from(likeAry)//[1,2].from（）
}

//用了util里面的工具函数
function add(...arg){
    // return eval(arguments.join("+"))
    return eval(util.toArray(arguments).join("+"))
}