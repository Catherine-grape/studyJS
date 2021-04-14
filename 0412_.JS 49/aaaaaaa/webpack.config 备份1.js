let path = require('path');//输出当前的绝对路径

const HtmlWebpackPlugin = require('html-webpack-plugin');//生成html模版的
const { CleanWebpackPlugin } = require('clean-webpack-plugin');//清除之前的打包的内容的
module.exports = {
    // webpack编译打包的入口文件地址
    entry: './src/haha.js',
    output: {//出口
        // 只能写绝对路径，从c盘开始找 path是当前文件编译之后生成的项目目录
        path: path.resolve("./list") ,//path: path.resolve() + "/list"
        filename: 'index.[hash].js'//编译之后的文件的名字  加上.[hash] 是一个动态的值，get请求有可能走缓存 ，这样避免走缓存，文件名字不一样
    },
    // 在webpack中使用插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',//动态生成html 引入最新的js文件 这个是模版的路径
            filename: 'ss.html',//当前生成的html的文件名
            hash: true//get请求有可能走缓存 ，这样避免走缓存 给文件名字后面加上不一样的戳
        }),
        new CleanWebpackPlugin()//清除之前生成的无用的js文件
    ]
}

// C:/xx/xx/xx/DeskTop/day1.2/build
// path.resolve() 输出当前的绝对路径