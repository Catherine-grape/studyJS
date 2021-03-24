//Math常用的方法
/* 
Math.abs（） 求绝对值
*/
Math.abs(-2);//2

//Math.floor（）向下取整 永远取最小的 不管是正数还是负数，取最小值 
Math.floor(1.1);//1
Math.floor(1.5);//1
Math.floor(-1.1);//-2
//Math.ceil向上取整 永远取最小的 不管是正数还是负数，取最大值
Math.ceil(1.1);//2
Math.ceil(-1.8);//-1


//Math.round() 四舍五入，与之前的理解相同，对于负数来说想要进一需要比5大一点点
Math.round(1.1);//1
Math.round(1.5);//2
Math.round(-1.1);//-1
Math.round(-1.5);//1
Math.round(-1.51);//-2


//Math.min(1,2,3) 取最小值
Math.min(1,2,3);//1
//Math.max（1,2,3) 取最大值
Math.max(1,2,3);//3 只能跟数字和逗号

var ary=[4,5,6];
Math.max(ary);//NaN
Math.max(...ary);//6  es6展开运算符... 展开后就是4，5，6

//Math.random();获取0-1之间的随机数  包含0不包含1
Math.random();//0.5147393101768414
Math.random();//0.45874446982055717

//获取n-m之间的随机数：Math.random（）*（m-n）+n
//获取 10-20之间的随机数 Math.random（）*（20-10）+10 //15.97336582080544

//Math.sqrt（) 开平方 基本不用
Math.sqrt(9);//3

//Math.pow(n,m)取幂  基本不用 n的m次幂 2*2==4*2==8
Math.pow(2,3);//8
//Math.PI
Math.PI;//3.141592653589793

