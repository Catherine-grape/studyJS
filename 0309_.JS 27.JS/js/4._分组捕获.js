// 正则的分组捕获
let str = 'dfg3h3jkl4f4gh';
let reg = /\d([a-zA-Z])\d/;
// 捕获的时候如果正则中有小括号分组，那exec捕获的返回结果也是一个数组，数组的第一项是大正则捕获的内容 剩下的都是每一次小分组正则捕获的内容
console.log(str.match(reg));//['3h3','4f4']
// match 只能捕获到大正则匹配到的内容，每次小正则匹配的内容他是捕获不到的

function my(str) {
    //1.先看当前的正则有没有g，如果没有就直接return第一次捕获的值就好了
    if (!this.global) {
        return this.exec(str);
    }
    let big = []//创建一个数组，用来存储每一次捕获的内容
    let small=[]
    /* let res = this.extc(str);//创建一个变量，用来接收每一次捕获的数组内容
    while (res) {
        //while用于不知道循环多少次的循环
        let [value,$1] = res;//先把捕获的内容解构出来 == let value=res[0]
        big.push(value);//再把内容push到数组中
        small.push($1);
         */res = this.exec(str);//再继续捕获
    
let res = str.matchAll(this);//获取的是一个遍历器，里面存储的是每一次捕获的内容
for (var value of res) {
    let [$1, $2] = value;
    big.push($1);
    small.push($2);
}
    return {
        big,
        small
    }
}
RegExp.prototype.my = my;
reg.my(str);
// {big:['3h3','4f4'],small:['h','f']}

// 正则类也可以用做捕获
let str1 =  'dfg3h3jk4f4gh';
let reg1 = /\d([a-zA-Z])\d/g;
// 在匹配的时候，正则会把匹配到好的内容存储到你的正则类上，$1-$9是每一次小分组正则匹配到的内容
// $&这是大正则匹配到的内容
// 如果匹配多次，那以前匹配到的内容就会被覆盖
reg1.test(str1);
console.dir(RegExp.$1);//3
reg1.test(str1);
console.dir(RegExp.$1);//4 同一个空间地址


let str2 = 's3dfg4h5k';//'s3,dfg4,h5,k'
str2 = str2.replace(/\d/g, "$&,");

let str3 = 's3dfg4h5k';//"3,f4,5k"
str3 = str3.replace(/[a-z](\d)[a-z]/g, "$1,");