

/* 对象和字符串进行比较的时候，把对象转为字符串再进行比较
null==undefined;//true
null===undefined;//false
NaN 永远不等于任何数据类型


剩下的不同的数据类型在进行比较的时候，都是先转为number 再比较
 */
1==true;   //转成数字再比较
2==false;
2==true;

[]==true; //  Number([])===>0  Number(true)===>1  false
![]==true;// !true===>false==true ===>false

[]==[];//false
var ary1=[1,2];
var ary2=ary1;
ary1==ary2; //true