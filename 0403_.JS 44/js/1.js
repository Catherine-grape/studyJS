/* 
axios 就是利用promise 封装的一个ajax库
当axios.xx（）返回值是一个promise实例，当请求成功以后实例会变成成功态，请求失败以后实例变成实例失败态
当成功以后then中的第一个回调函数就会执行，并且还会把当前响应的内容传递到回调函数中
 */
axios({
    url: 'xxx',
    method: 'get',
    baseURL: 'xxxx',//一般写在外面的基础路径
    data: {},//post 默认json
    params: {},//get

    header: {
        "content-type": "application/x-www-from-urlencoded"
    },
    transformRequest: [function (data) { //只对post系列请求有效
        let str = '';
        /* for (let key in data) {
            if (!data.hasOwnProperty(key)) break;
            str+=`&${key}=${data[key]}`
        } */
        str = qs.stringify(data);//他的作用和上面的for in 循环是一样的
        return str;
    }],
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [function (data) {//不区分post get  data是响应体
        // 对 data 进行任意转换处理
        return data;
    }],
    timeout: 1000,
    // `withCredentials` 表示跨域请求时是否需要使用凭证[比如cookie]
    withCredentials: true, // default

    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function (status) {//http状态码  当前函数的返回值是可以控制promise的状态，不管你的http请求失败与否，只要这里返回的是false，那当前的promise的实例的状态就是失败
        return status >= 200 && status < 400; // default   请求成功之后 then执行之前 这个不写 默认200才是成功的  300也不行 这样改一下才行
    },
});

