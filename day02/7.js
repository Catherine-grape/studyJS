
var num=1;
var flag=0;
// num大于0并且flag大于0才可以弹窗  &&且 所有条件必须都成立，才能执行语句 最终转换的都是布尔值 是true 就可以执行
if(num>0&&flag>0){
    alert("111")
}
// num大于0 或 flag大于0 就可以  ｜｜或 只要满足其一 就可以执行语句
if(num>0||flag>0){
    alert("22")
}
//小括号里面最终转换的都是布尔，如果true就可以执行
if(100){
    alert("333")
}