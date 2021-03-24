// 匹配有效数字(精准匹配要加上^$范围，不然的话有一部分准确就可以)
// 有效数字的开头有可能是+或者-  [+-] +|-  {0,1} ?
// 中间的数字部分:有两种可能，个位数或者多位数  \d|[1-9]\d+
// 最后的小数部分 (\.\d+)?  {0,1}
let reg = /^[+-]?(\d|[1-9]\d+)(\.\d+)?$/;
let reg = /^(\+-){0,1}(\d|[1-9]\d{1,})(\.\d+){0,1}$/;
console.log(reg.test('1.2.2'));

// 匹配密码
// 6-16位 由数字字母_组成
// let reg = /[0-9a-zA-Z]{6-16}/; 与下面一样
let reg = /\w{6-16}/;
function testCode(value) {
    if (value.length >= 6 && value.length <= 16) {
        let ary = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM_'
        for (let i = 0; i < value.length; i++){
            let item = value[i];
            if (ary.indexOf(item) == -1) {
                console.log('不符合规则');
                break; 
            }
        } 
    } else {
        console.log('不符合长度');
    }
} testCode('w$owieurowi')


// 匹配名字
//[\u4E00-\u9FA5] 代表汉字
let reg = /[\u4E00-\u9FA5]{2,7}(·[\u4E00-\u9FA5]{2,7}){0,2}/

// 匹配身份证号
// 年 19   20 /(19|20)\d{2}/  
// 月 1-12 (0[1-9]|1[0-2])
//日 01-31 01-09 10-29 30-31  /(0[1-9])|[1-2]\d|3[0-1])
let reg = /^{18}$/;
reg=/^\d{17}(\d|x)$/
reg = /^(\d{6})(\d{8})\d{2}(\d)(?:\d|x)$/;
reg =/^(\d{6})((?:19|20)\d{2})(0[1-9]|1[0-2])(0[1-9])|[1-2]\d|3[0-1])\d{2}(\d)(?:\d|x)$/

//(19|20)\d{2}  (0[1-9])|(1[0-2]) 01-09 10-29 30-31 (0[1-9])[1-2]\d|3[0-1])

    