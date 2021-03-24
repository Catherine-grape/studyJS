let str = '2020-3-13 09:39:26';

function timeFormat(time, template = "$0年$1月$2日 $3时$4分$5秒") {
    let ary = time.match(/\d+/g);
    template = template.replace(/\$(\d)/g, ($1, $2)=> {
        let time=ary[$2] || "00";
        time=time.length < 2 ? '0' + time : time;
        return time;
    })
}
timeFormat(str) 

