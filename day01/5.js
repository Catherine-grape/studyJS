// ## Number数据类型
// - 正数、负数、小数、0、还有一个比较特殊的NaN（not a number）

// ## 把其他数据类型转换为数字类型的方法：

// 1. Number
// 	- 数字的字符串，转换的结果数字，比如：Number（“1”）；
// 	- 空的字符串，转换结果是0，比如：Number（“”）
// 	- 如果字符串中包含了非数字的字符，转换的结果就是NaN，Number（“12px”） NaN  

		```
		Number("1")
		1
		Number("")
		0
		Number("12px")
		NaN
		```
- 布尔
		// - Number(true)===》1
		// - Number(false)===〉0

		```
		Number(true)
		1
		Number(false)
		0
		```
// - Number(null)==>0

// - Number(undefined)==>NaN

		```
		Number(null)
		0
		Number(undefined)
		NaN
        ```
        

"[object Object]"

Number ("[object Object]")
NaN

// Number({"name":"lili"});==>{"name":"lili"}.toString();==>"[object Object]"==>Number("[object Object]")==>NaN

// Number([1,2]);==>[1,2].toString()==>"1,2"==>Number("1,2");===>NaN
// Number([1]);==>[1].toString()==>"1";===>1


// 2. parseInt 把字符串转为整数 （整型）
// - 从左到右进行查找，遇到非有效数字就停止。
```
parseInt("12.5")
12
parseInt("p12.5")
NaN
parseInt("12.5p")
12
```


// 3. parseFloat 转换成浮点数  可以识别第一个小数点

```
parseFloat("12.5")
12.5
parseFloat("12.5.6")
12.5
parseFloat("w12.5")
NaN
```

// ## NaN

- "not a number"
// - 注意：NaN 连它自身都不相等，所以不能拿NaN来作为判断是不是有效数据

```
NaN==NaN
false
```
// ## isNaN

// 1. 例子：isNaN(num) 返回结果是布尔数据类型
//  - true 就说明是非有效数字
//  - false 就是有效数字 
// > 注意：如果检测的数据类型是非数字，会先隐式调用Number这个方法
```
var num=2;
isNaN(num)

false
```

```
isNaN(1)==>false;
isNaN("2")===> Number("2")===>isNaN(2)==>false;
isNaN(true)===>Number(true)==>isNaN(1)==>false;
isNaN(false)===>Number(false)==>isNaN(0)==>false;
isNaN(null)===>Number(null)==>isNaN(0)==>false;
isNaN(undefined)===>Number(undefined)==>isNaN(NaN)==>true;
isNaN({'name':'lili'})==>Number({'name':'lili'})==>true;
isNaN([1,2])=>true
isNaN([1])=>false
```

// ## 字符串
// - 把字符用单引号或者双引号包起来比如：“false” 字符串
// - 获取字符的长度：str.length
// - 索引：从0开始 依次递增
// 	- 第一个字符 索引：0
// 	- 最后一个字符的索引：str.length-1
// - 获取索引对应的字符：str[索引]

```
str是自己起的名字
var str="asddjfhksjg"
undefined
str.length
11
str[0]  获取第0个
"a"
str[str.length-1]  获取最后一个
"g"
```

// ## 字符串的运算

// - 加法 比较特殊：如果含有字符串会进行字符串的拼接

```
var str="ab"
str+0
"ab0"
```
// - 减法、乘法、除法，会先转为Number的数据类型，再计算

```
"2"-"1"
1
"2"*"6"
12
"6"/"2"
3
```


