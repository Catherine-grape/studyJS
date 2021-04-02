function ajax(params) {
 let { url, type = 'get', async = 'ture', data = {}, cache = 'false', timeout, headers = {} ,success=()=>{}} = params; //解构赋值 就是变量
    /* let obj1 = { name: 1 };
    let obj2 = { value: 2 };
    let res = Object.assign(obj1, obj2);//obj1 {name:1,value:2} 是从第二个参数开始把每一个对象的键值对通通合并到第一个参数对象里，不会产生新的对象。
    console.log(res === obj1);//true
   // let obj3 = { ...obj1, ...obj2 };//对象合并 产生新对象
   // let res = Object.assign({},obj1, obj2); 产生新对象 */
    /* let options = {
        type: 'get',
        async: true,
        data: {
        },
        cache: false,
        timeout: 1000,
        headers: {
            
        }
    }
    let obj = { ...options, ...params };//后面的把前面的覆盖
    Object.assign(options, params); */
    // data {name:1,age:2}===>name=1&age=2
    let str = ""
    for (let key in data) {
        str += `&${key}=${data[key]}`
    };
    str = str.slice(1);
    if (type == 'get') {
        url += `?${str}`
        str = null;
    }
    
    let xhr = new XMLHttpRequest;
    xhr.open(type, url, async);
    for (let key in headers) {
        xhr.setRequestHeader(key, headers[key]);
    }
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) {
            success(xhr.response)
        }
    };
    xhr.send(str);
}

ajax({
    url: 'xxx',
    type: 'get',
    async: true,
    data: {
        name: 1,
        age:2
    },
    cache: true,//缓存
    timeout: 1000,
    headers: {
        ss: 100,
        aa:200
    },
    success: (res)=>{
        console.log(res);
    }
})




