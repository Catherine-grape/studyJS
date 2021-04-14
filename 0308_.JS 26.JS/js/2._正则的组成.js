// 正则的组成，完整的正则由两部分组成:元字符和修饰符组成（修饰符可以省略）
let reg = /-/g;//-：元字符 g：修饰符

// 元字符分成三类：量词元字符、特殊元字符、普通元字符

// 量词元字符（代表出现的次数）
/* 
1. *：0到多次
2. +:1到多次
3. ？：0到1次
4. {n}:出现n次
5. {n,}:至少出现n次
6. {n,m}:出现n到m次
*/
let reg = /-/;//ture只要-出现一次就可以
let str = "sdd-f"

let reg = /-*/;
let str = "sddf"//true
console.log(teg.test(str));

// 特殊元字符
/* 
1. \:转义字符，可以把特殊的元字符转换为普通的元字符，也可以把普通的元字符转换成特殊元字符 ！
2. .:任意字符（） ！
3. ^:以什么开头   ！
4. $:以什么结尾    ！
5. \n:换行符
6. \d:0-9之间的任意数字   ！
7. \D:非0-9之间的任意数字  
8. \w:数字、字母、下划线  ！
9. \t:制表符 用不上
10. \b:单词边界 空格就是单词的边界
11. \s:空白符
12. x|y:x和y之间的任意一个      ！
13. [a-z]:a到z之间的任意一个字符（小写，大写的 多个范围 数字都可以） ！
14. [a-zA-Z0-9]:a到z或者A到Z或者0-9之间的任意一个字符  ！
15. [^a-z]:非a-z之间的任意字符
16. ():分组 提高匹配的优先级 分组引用 分组捕获
17. (?:):只匹配，不捕获
18. (?=):正向预查
19. (?!):负向预查
*/
let reg = /d/;//d
let reg = /\./;//转成普通的.


let reg = /^18/;//false 开头
let reg = /18$/;//false 结尾
let str = 'ffff18sd';

let reg = /^18$/;//必须以所有的内容去匹配
let str = '1818';//true


let reg7 = /^1(\d)\d{9}$/;//捕获第二位
console.log(reg7.exec(15532892626));

// 普通元字符
/* 
f
g
h
……
*/

let ary = [1, 2, 3, [4, [5, 6]]];
function fn(ary) {
    for (let i = 0; i < ary.length; i++){
        if (ary[i] instanceof Array === true) {
            ary.push(...ary[i]);
        }
        
    }
       return ary
    }
fn(ary)