/* 
正则：服务字符串的
正则的组成：元字符和修饰符
元字符：普通元字符 特殊的 量词
* + ? {n} {n,} {n,m}
\d  \  . ^ $ \w \b e|w [ew] ()  (?=) (?!) (?:)
*/
// \b 单词边界
let str = 'good good study'
let reg = /\b[a-zA_Z]+\b/;//good

/* 
修饰符 i（不区分大小写） m（多行匹配） g（全局匹配）
*/
let reg1 = /s/i;//匹配的时候不区分大小写
console.log(reg.test('S'));

// 手机号 人名 身份证 邮箱
// 140203947582@qq.com
// rw123@163.com.cn
let reg2 = /^[a-zA-Z-9_]{6,}@[a-zA-Z0-9]{2,3}(\.[a-zA-Z]+){0,2}$/;