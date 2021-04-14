// 利用replace进行捕获
// str.replace(str,str)
// str.replace(reg,str)
// str.replace(reg,fun)
let str = 'ssssass';
str = str.replace("a", "w");//sssswss

let str1 = 'goodbyessgoodbye';
str = str.replace(/goodbye/g, "拜拜");//"拜拜ss拜拜"

let ary = [100, 200, 300, 400];
let res = ary.map((item, index) => {
    return item
});//[100,200,300,400]
let str = 'goodssgoodaagood';
str = str.replace(/good/g, function() {
    console.log(1);//3 
    console.log(arguments);//["good", 0, "goodssgoodaagood", callee: ƒ, Symbol(Symbol.iterator): ƒ]
    console.log(arg);
    return ',';//如果replace执行的时候，第二个参数传递的是一个函数的话，那正则匹配几次，函数就执行几次，而且每一次匹配的时候，会把匹配到的值以实参的形式传递给回调函数
    // replace的返回值，每一次回调函数的执行结果会把当前匹配的内容进行替换
    
});
console.log(str);//'undefinedssundefinedaaundefined'


let str3 = 'sd10sdkg20sldk30gh';
str3 = str3.replace(/\d+/g, function (...arg) {
    //['10',...]
    return arg[0]+'0'
})

// 正则的贪婪性
/* 
正则在捕获的时候，能多捕获一个就多捕获一个，绝不会少捕获
在正则的最后加一个？就会取消其贪婪性
*/
let str4 = 'sd2019iejs' 
let reg4 = /\d+?/;//['2','0','1','9']
let res = str4.match(reg);//["2019"]

    let str = 'good good study day day up';
str = str.replace(/\b[a-zA-Z]+\b/g, function (...arg) {
    let res = arg[0];
    let item = res[0].toUpperCase();
    return item + res.slice(1);
});
str = str.replace(/\b([a-zA-Z])([a-zA-Z]*)\b/g, function (...arg) {
    // let first = arg[1].toUpperCase();
    // let second = arg[2];
    let [, first, second] = arg;//从实参里结构出想要的内容
    first = first.toUpperCase();//把字母转大写
    return first + second;//把转大写的字母和剩下的但参拼接返回出去
})
let str = 'good good good day day up';
str = str.replace(/\b[a-z]/g, function (...arg) {
    return arg[0].toUpperCase()
});
console.log(str);