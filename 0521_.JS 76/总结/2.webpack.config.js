
/**
 * 1 common 
 *    merge用来合并webpack配置的
 *    let dev = {...开发配置}, prd = {...生产配置}, common = {...公共的配置}
 *    例如现在项目有开发和生产两个配置，还要一些公共配置，那么我们运行不同的脚本的时候，要引入开发或者生产 环境的配置，这时候就需要写 module.exports = merge(common,dev);
 *    当在执行webpack的时候需要在package.json中配置不同的脚本命令：
 *        + build: "webpack --config config/webpack.pro.js"
 *        + dev: "webpack-dev-server --config config/webpack.dev.js"
 * 2 plugins
 *    html-webpack-plugin 用来生成html并插入文件的
 *    clean-webpack-plugin 用来清空之前的老的dist包的
 * 
 * 3 dev-server 启动一个开发服务的
 *    before 在这里可以对接口进行拦截，做一些假数据的模拟
 * 
 * 4 modules 使用loader加载器的
 *    处理css：css-loader-->postcss-loader-->style-loader 以style的方式引入样式
 *    想把css淡出处理成css文件，以外链的方式引入得使用const miniCss = require('mini-css-extract-plugin') ==>(miniCss.loader-->postcss-loader-->style-loader)
 * ----------------------------------------
 *    处理图片url-loader(可以把图片转换为base64，如果大小超了，就用file-loader加载)  (file-loader隐式调用)可以设置limit把指定大小的图片进行base64转码
 * 
 * 5 optimization 压缩用的
 *  css-minimizer-webpack-plugin 用来压缩css的
 *  ter-webpack-plugin 用来压缩js的
 *  
 * 6 处理js
 *  基于babel进行处理
 *     babel-loader  @babel/core  @babel/preset-env
 *     polyfill-loader
 * 7 new webpack.ProvidePlugin({ // 这样一写就不用在组件里去引入jquery了，可以直接用了
 *          $:'jquery'
 * })
 */

const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {HtmlWebpackPlugin} = require('html-webpack-plugin');
const {merge} = require('webpack-merge');
const miniCss = require('mini-css-extract-plugin')
module.exports = {
  mode:'development',
  entry:'./src/index.js',
  output:{
    filename:'chunk.[hash].js',
    path: path.resolve(__dirname,'dist')
  },
  devServer:{
    port:9000, // 启动服务的端口号
    open:true, // 自动打开浏览器
    hot:true, // 开启热更新
    before:function(app){
      // before函数会在请求发送出去之前执行，对接口做一次拦截，可以在这里边直接返回数据，这样就可以在这里做mock假接口了
      app.get('/some/path',(req,res)=>{
        res.json({custom:'response'})
      })
    },
    proxy:{
      // '/pai':'https://www.baidu.com' // 发送的带api的接口都去百度服务器上器请求数据
      'api':{
        target:'https://www.baidu.com',
        pathRewrite:{
          '^/api':'' // 这是替换的意思，把请求连接里的这个替换成空字符串
        }
      }
    }
  },
  plugins:[
    new CleanWebpackPlugin(), // 每次打包都清空dist中之前的内容
    new HtmlWebpackPlugin({ // 每次打包之后，自动把编译好的js文件插入到html中
      template:'./public/index.html',
      filename:'index.html',
      hash:true, // 是否给引入的文件夹hash，防止走缓存
      minify:true, // 是否开启html的压缩，这里可以进行详细的配置
      title:'这还少html中的title文案', // 这里的内容会渲染到html的title标签里
      // <title>%= htmlWebpackPlugin.options.title %</title>
    }),
    new miniCss({
      filename:'css/[name].[hash].css', // 生成一个css文件夹，存放css文件
    })
  ],
  module:{
    rules:{
      test:'\.css$',
      use:[miniCss.loader,'css-loader',{
        loader:'postcss-loader',
        options:{
          postcssOptions:{
            plugins:[
              'postcss-preset-env'
            ]
          }
        }
      }]
    }
  },
  optimization:{
    // 配置压缩优化的
    minimizer:[

    ]
  }
}