/*
node 是一个运行环境，可以让js代码在node环境上运行，这样js就可以写后台的逻辑。（读取服务器的数据）
当你安装成功node以后 就会自带npm，

npm是下载插件的（开发项目的时候jq zepto swiper _undersore  ）也可以管理插件
创建一个文件夹 点击三角选择  terminal（终端）「当前文件夹的终端」 路径的最后一级是文件夹的名字
npm init -y 初始化一个项目，并且生成配置清单 执行完成之后，当前的项目里就会自动生成一个package.json 文件夹中会出现package.json
npm install jquery（插件名字） 下载jq    npm install swiper(插件名字)
npm install 插件名字  当运行的时候会在你的项目里生成一个node_modules文件夹，把当前下载的插件存储到此文件夹内

下载的插件都在node_modules（只在第一次下载生成）里面  带min的都是压缩打包好的   jquery在dist里面

package.json中的dependencies对应的对象中会存储着当前你下载的所有插件，以及每一个插件的版本（当前项目的配置清单）


下载指定版本的插件
npm install jquery@1       下载版本1中的最新版本
npm install jquery@1.1.8  下载指定版本的插件
或者在package.json 中的dependencies 中更改版本号


node_modules 太大了 发送的时候把modules删除  然后 npm install 回车 会在package.json中的配置清单 自动下载

npm install 会自动把配置清单中的插件重新下载一遍
npm i ===npm install  ，i是install的缩写

移除
npm uninstall jquery 卸载当前的插件


*/


/* 
package.json

  {
  "name": "demo",//项目名字
  "version": "1.0.0",//开发的版本号
  "description": "",//描述
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",//作者
  "license": "ISC",
  "dependencies": {//配置清单
    "jquery": "^3.6.0",
    "swiper": "^6.5.0"
  }
}

*/

/* 
1.打开一个新项目（文件夹）
2.打开当前项目的终端
3.输入 npm init -y
4.npm install 插件名
*/