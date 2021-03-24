let num = 12345678;//'12,345,678'
function qian(value) {
    value = value + "";
    value = value.split("").reverse().join('');//'87654321'
    value = value.replace(/\d{3}/g, function ($1) {
      return  $1+","
    })
    value = value.split('').reverse().join('');
    value=value[0]==","?value.slice(1):value
    return value;
}
qian(num);//'12,345,678'



    function format(num) {
        let reg = /\d{1,3}(?=(\d{3})+$)/g;
        return (num + '').replace(reg, '$&,');
        //$&最近一次匹配项  //$n 表示第n个捕获组的内容，n取1-9
    }
    console.log(format(num))
