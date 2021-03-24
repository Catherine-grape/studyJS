/* 
nes Date()//Wed Jan 27 2021 15:46:51 GMT+0800 (中国标准时间)

new Date().getFull
*/
var res=new Date();//一个时间对象
var year=res.getFullYear();//年2021
var month=res.getMonth()+1;//[0-11]对应的是1-12月
var date=res.getDate();//日期
var day=res.getDay();//值的范围[0-6] 对应周日周一周二---周六

var hours=res.getHours();//小时
var minutes=res.getMinutes();//分钟
var seconds=res.getSeconds();//秒

var milliseconds=res.getMillseconds();//毫秒

var localtime=res.toLocaleString();//"2021/1/27 下午3:49:41"
var localDate=res.toLocaleDateString();//"2021/1/27"
var localDate=res.toLocaleTimeString();//"下午3:49:41"

new Date().getTime();//1611885930705获取现在的时间距离1970.1月1号 00:00:00 的时间戳 毫秒