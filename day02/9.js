var num=5
if(num>=5){
   num++//num=num+1
}else{
   num--//num=num-1
}
//条件 num大于等于5 吗？ 成立的话num=num+1 ：不成立的话 num=num-1
// 格式 条件？条件成立执行语句 ：条件不成立的执行语句
//如果说有多条语句，我们可以用一个小括号包起来，语句之间用逗号进行分隔
num>=5?num++:num--;
num>=5?(num++,console.log(1)):num--;


if(num>3){
    alert("num")
}
//在只有一个条件的情况下 后面可以用占位符 三个都是占位符 任选其一
num>3?alert("num"):undefined;
num>3?alert("num"):null;
num>3?alert("num"):void 0;
//使用的比较少