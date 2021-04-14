let path = require('path');//输出当前的绝对路径

const HtmlWebpackPlugin = require('html-webpack-plugin');//生成html模版的
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//清除之前的打包的内容的
const MiniCssExtractPlugin = require('mini-css-extract-plugin');;//抽离css的plugins
module.exports = {
    // webpack编译打包的入口文件地址
    entry: './src/haha.js',
    output: {//出口
        // 只能写绝对路径，从c盘开始找 path是当前文件编译之后生成的项目目录
        path: path.resolve("./list") ,//path: path.resolve() + "/list"
        filename: 'index.[hash].js'//编译之后的文件的名字  加上.[hash] 是一个动态的值，get请求有可能走缓存 ，这样避免走缓存，文件名字不一样
    },
    // 配置一个类似于live server的功能（仅仅是为了咱们开发使用的），他能自动创建一个web服务，然后给你打开一个网页，而且还能在你改了开发的代码之后，把页面自动更新，还能配置proxy代理
    devServer: {//热更新  package.json  script --> "dev": "webpack-dev-server",
        port: 3000,//起的服务的端口号
        compress: true,//开启GZIP 把代码传输的时候压缩一下
        open: true,//自动打开浏览器
        hot: true,// 开启热更新   默认打开的时候会找index.html。如果是自己配置起的文件夹 需要加上后缀/xxx.html
        // proxy: {
        //     '/':'http://127.0.0.1:8888'
        // }
    },
    // 在webpack中使用插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',//动态生成html 引入最新的js文件 这个是模版的路径
            filename: 'ss.html',//当前生成的html的文件名
            hash: true//get请求有可能走缓存 ，这样避免走缓存 给文件名字后面加上不一样的戳
        }),
        new CleanWebpackPlugin()//清除之前生成的无用的js文件
    ],
    // 配置解析各种文件加载器的
    module: {
        //loader解析是从下往上、从右往左进行解析
        rules: [
            {
                test: /\.(less|css)$/i,
                use: [//从下往上进行解析
                    "style-loader",//把处理好的css样式内嵌（style）到html页面
                    "css-loader",//处理css文件里的@import这些东西
                    "postcss-loader",//处理兼容的（给样式增加前缀，他必须配合postcss，config.js文件一起来编译
                    "less-loader"//把less代码编译成css样式
                ]
            }
        ]
    }
    
}

// C:/xx/xx/xx/DeskTop/day1.2/build
// path.resolve() 输出当前的绝对路径
// npm run dev 起服务

// css的样式配置，首先在当前页面的module里配置一下，然后再在package.json中配置一下
/* 
"browserslist":[
    "> 1%",//用户使用浏览器超过1% 兼容99%的浏览器
    "last 3 version"//兼容每个浏览器的最新的三个版本
]
*/