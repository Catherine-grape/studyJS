/* 
带var 和不带var的区别 
 在全局作用域下都是给window添加属性名和属性值，区别
 - 带var 有变量提升，不带var 没变量提升
 - 带var 是不可配置的，你通过delete window.a 删除不掉，没带var是可配置的，可以删除掉
*/

var a=3;//delete window.a false
b=4;//

"a"in window//true
"b" in window//true
delete window.b//true
delete window.a//false
"b" in window//false
"a" in window//true