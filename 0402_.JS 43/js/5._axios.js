/* 
axios的基础
返回值是promise的实例
*/
axios.get('./data.json').then((res) => {
    console.log(res);
})
axios({
    url: 'xxx',
    method:"get"
})
// 上下两个等价 一般用下面这个比较多
axios.post({
    url:'xxx'
})
// post data   get parmas


// get 系列
axios.get('urlxxx', {
    params: {
        a: 1,
        b:2
    },
    timeout:100
})
// post 系列
axios.post('urlxxx', {
    a: 1,
    b:2
})
axios.post('urlxxx', {//这个对象叫配置选项
    data: {
        a: 1,
        b: 2
    },
    timeout:1000
})

// axios 的请求配置
/* 


*/
axios.get('./data.json', {
    // get 请求传参
    params: { a: 1, b: 2 },
    // url: 'xxx',//请求的路径
    // method:'post'//请求的方式，默认是default
    // baseURL: 'http:www.baidu.com'//基础的路径会和URL拼接到一起


    /*  如果要改发送参数格式 写下面的这种 （后台需要什么格式） 
    header: {
        'content-type':"application/x-www-from-urlencoded"
    }, */
    // a=1&b=2&c=3 axios需要手动改
    // 此函数会在请求发送出去执勤执行，在当前函数的里可以对发送的参数进行更改，此函数返回什么，给后台发送的参数就是什么
    // 默认是json格式的
    /* 
    transformRequest在axios内部会有一个默认的函数，它会返回json格式的数据，与请求头里面的content-type是对应的（content-type的默认值是application/json）。如果你自己写了transformRequest函数，那默认的就会被覆盖，这时候数据的格式就要你自己来处理了。此函数只对post有效
    如果要发送application/x-www-from-urlencoded 的就要写下面的
    transformRequest: [function (data) {
        // 对 data 进行任意转换处理
        console.log(data);//{ a: 1, b: 2 }    Request [object object]
        let str = '';
        for (let key in data){
            str+=`&${key}=${data[key]}`
        }
        str = str.slice(1);
        // return data;
        return str;
    }],
 */
    
    
    /* 请求成功之后，数据返回之前 拦截 

    transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data;
    return JSON.parse(data);//[{a: 1, b: 2}]

    data=JSON.parse(data);
    data.push(100);
    return data;//[{a: 1, b: 2},100]
  }],
    */
    


    // `withCredentials` 表示跨域请求时是否需要使用凭证 默认false
   // withCredentials: false, // default  



}).then((res) => {
    console.log(res);
})


// axios的公共配置  要放在最开头
axios.defaults.baseURL = 'http://www.baidu/com/list/';
axios.defaults.headers = {
    'content-type': "application/x-www-from-urlencoded",
    ss:100
}
axios({
    url: 'item',//基础的加上现在这个 http://www.baidu/com/list/item
    method:'get'
})