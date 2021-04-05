/* 
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <script src="./node_modules/axios/dist/axios.js"></script>
  <script>
    // 添加请求拦截器
    axios.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      console.log(config);
      config.params.ss = 100; // 在请求发送出去之前在增加一个参数
      config.headers.aa = encodeURI('中国'); // 在请求发送出去之前给请求头增加一个参数
      return config;
    });
    // 添加响应拦截器(tranrfromResponse类似)
    axios.interceptors.response.use(function (config) {
      // 此函数会在请求完成之后，then里边的回调函数执行之前执行
      // 在此函数里可以对当前的响应内容进行任意的更改
      return config.data;
    });

    axios.get('./data.json', {

    }).then((res) => {
      console.log(res);
      // 当前返回的res是一个大的形影信息

      // data: { } //  响应体
      // status: 200, // http请求的状态码
      // statusText: 'OK', // http请求状态的描述
      // headers: { }, // 对象格式的响应头
      // config: { }, // 当前axios请求的配置信息
      // request: { } // 当前的ajax实例(就是之前的xhr)

    }).catch((res) => {
      console.log(res);
    })
  </script>
</body>

</html>
*/