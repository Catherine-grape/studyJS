let path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 抽离css的plugins
module.exports = {

  entry: './src/index.js',
  output: {
    path: path.resolve('./build'),
    filename: 'index.[hash].js'
  },
  // 咱们配置一个类似于 live server的功能(仅仅是为了咱们开发使用的)，他能自动创建一个web服务，然后给你打开一个网页，而且还能在你改了开发的代码之后，把页面自动更新，还能配置proxy代理
  devServer: {
    port: 3000, // 起的服务的端口号,
    compress: true, // 开起GZIP,
    open: true, // 自动打开浏览器
    hot: true, // 开启热更新
    // proxy: {
    //   '/': 'http://127.0.0.1:8888'
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      hash: true
    }),
    new CleanWebpackPlugin(),

    // 把css代码进行抽离成一个css文件
    new MiniCssExtractPlugin({
      filename: 'index.[hash].min.css' // 配置css文件名
    }),
  ],
  // module中的配置解析各种文件的加载器的
  module: {
    // loader解析上的顺序是从下往上,从右往左进行解析
    rules: [
      {
        test: /\.(less|css)$/i,
        use: [
          MiniCssExtractPlugin.loader, // 以link的方式把css文件插入页面，
          // "style-loader", // 把处理好的css样式内嵌(style)到html页面内
          "css-loader", // 处理css文件里的@import这些东西的
          "postcss-loader", // 处理兼容的(给样式增加前缀，他必须配合postcss.config.js文件来一起编译)
          "less-loader", // 把less代码编译成css代码
        ]
      },
      {

      }
    ]
  }
}

// css的样式配置，首先在当前页面的module里配置一下，
// 然后在在package.json中配置一下
  // "browserslist": [
  //   "> 1%", // 兼容用户使用浏览器超过1%
  //   "last 3 version" // 兼容每个浏览器的最新的三个版本
  // ]
