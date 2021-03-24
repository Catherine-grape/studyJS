// 正则的使用
// test：他就是匹配某一个字符是否符合某一个规则的，如果符合就返回true，反之就返回false

// ^ $
let reg = /18$/;//以18结尾就可以
console.log(reg.test('189'));//false
console.log(reg.test('198'));//false
console.log(reg.test('218918'));//true

let reg1 = /^18$/;
console.log(reg1.test('189'));//false
console.log(reg1.test('198'));//false
console.log(reg1.test('218918'));//false
console.log(reg1.test('18e18'));//false
console.log(reg1.test('18'));//true

let reg2 = /^\d{2}$/;
console.log(reg2.test('e2'));//false
console.log(reg2.test('2e'));//false
console.log(reg2.test('2e2'));//false
console.log(reg2.test('e2e'));//false
console.log(reg2.test('22'));//true
console.log(reg2.test('2'));//false

let reg2 = /^11111$/;//只能是这个 不能掺杂别的
// 如果^和$一起使用，那匹配的字符串必须和正则一摸一样才行，字符不能多也不能少
// 如果^和$单个使用，那字符串中只要包含符合规则的内容即可


// 2、\：转义字符
// .是除了\n之外的任意字符
let reg3 = /^2.3$/;
console.log(reg3.test('2.3'));//true
console.log(reg3.test('2e3'));//true
console.log(reg3.test('2@3'));//true

let reg4 = /^2\.3$/;
console.log(reg4.test('2.3'));//true
console.log(reg4.test('2e3'));//false
console.log(reg4.test('2@3'));//false

let reg5 = /\\d/;//


let str = '\d';// \在字符串也有转译字符的作用 d  \\d 第一个把第二个转成普通字符 所以如果想在字符串中写\那就写俩（让第一个把第二个转换为普通的字符）

// [a-zA-Z0-9] {}
// 写一个匹配手机号的正则
// 第一位是 1 第二位是3-9 剩下的9位是数字
let reg6 = /^1[3-9]\d{9}$/;
console.log(reg6.test("19382738490"));

// 3、x|y: x或者y之间取一个
let reg7 = /^18|29$/;
console.log(reg7.test('18'));//true
console.log(reg7.test('29'));//true
console.log(reg7.test('189'));//true
console.log(reg7.test('129'));//true
console.log(reg7.test('1829'));//true

// () 分组 1.提高匹配的优先级  2.分组引用  3.分组捕获
let reg8 = /^(18|29)$/;
console.log(reg8.test('18'));//true
console.log(reg8.test('29'));//true
console.log(reg8.test('189'));//false
console.log(reg8.test('129'));//false
console.log(reg8.test('1829'));//false

let str = 'moon';//abbc  book look cool
let reg9 = /^[a-z]([a-z])\1[a-z]$/;//把分组出现的值再引用一次.1代表第一个小分组 \1代表让第一次分组的值再出现一次
let reg10 = /^([a-z])([a-z])\1\2$/;//abab \2代表让第二次分组的值再次出现一次

let str = 'a3a';
let reg11 = /^[a-z](\d)[a-z]$/;
console.log(reg11.exec(str));//3
let reg12 = /^([a-z])(\d)([a-z])$/;//['a3a','a','3','a']

// 身份证
let reg13 = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{2})(\d)(\d|x)$/;
let res = reg13.exec('1330111199002180310')
console.log('您当前的生日是${res[2]}年${res[3]}月${res[4]}日');

let type = '110';
let obj = {
    '110':'北京'
}
console.log(obj[type]);

let reg14 = /[\u4E00-\u9FA5]/;//所有中国汉字

// []中不允许出现多位数
let reg15 = /[38-91]/;//3或者 8-9 或者1 中的任意一个字符出现一次即可
let reg16 = /[#$&s13]/;//中括号里的任意一个字符出现一次即可
let reg17 = /[3-9ws]/;

// (?:) 只匹配不捕获（取消小括号的捕获功能）