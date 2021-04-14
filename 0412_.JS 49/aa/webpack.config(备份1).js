let path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成html模板的

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// CleanWebpackPlugin清除之前的打包的内容的
module.exports = {
  // webpack编译打包的入口文件的地址
  entry:'./src/index.js',
  output:{
    // path是当前文件编译之后生成的项目目录
    path:path.resolve('/build') ,
    filename:'index.[hash].js' // 编译之后的文件的名字
    // hash每次生成的时候都不一样，也就是说每一次编译生成的文件名不一样，是为了防止请求走缓存的
  },
  // 在webapck中使用插件
  plugins:[
    new HtmlWebpackPlugin({
      template:'./public/index.html', // 模板的路径
      filename:'ss.html', // 当前生成的html的文件名
      hash:true // 在引入js路径的时候加上一个随机的参数，防止走缓存(和output中的filename中的hash的作用是一样的)
    }),
    new CleanWebpackPlugin() // 清空之前的生成的老文件的
  ]
}

// C:/xx/xx/xx/DeskTop/day1.2/build
// path.resolve() 输出当前的绝对路径