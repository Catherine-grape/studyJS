axios.defaults.baseURL = "http://127.0.0.1:5500";
//---------------------------------------------------------------------------------
// 2.跨域请求中允许携带资源凭证（例如COOKIE信息）
axios.defaults.withCredentials = true;
//---------------------------------------------------------------------------------
// 3.设置请求头:POST系列中，我们传递给服务器数据的格式一般以x-www-form-urlencoded格式为主
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
//---------------------------------------------------------------------------------
// 4.设置请求拦截器（只对POST系列有用）：把基于请求主体传递给服务器的内容进行拦截，把内容格式变为x-www-form-urlencoded这种格式，再传递给服务器
axios.defaults.transformRequest = function (data) {
    if (!data) return data;
    let str = ``;
    for (let key in data) {
        if (!data.hasOwnProperty(key)) break;
        str += `&${key}=${data[key]}`;
    }
    return str.substring(1);

    // console.log(qs.stringfiy(data));
};
// -------------两种都可以


//---------------------------------------------------------------------------------

// 5.设置响应拦截器：[成功状态]把从服务器获取的结果中的响应主体信息获取到即可，[失败状态]手动把错误信息抛出异常
// axios.interceptors.response.use(function (response) {
//   return response.data;
// }, function (error) {
//   throw new Error(error);
// });

//---------------------------------------------------------------------------------
// // 6.自定义配置成功态（把PROMISE状态改为FULFILLED）
axios.defaults.validateStatus = function (status) {
    return /^(2|3)\d{2}$/.test(status);

}