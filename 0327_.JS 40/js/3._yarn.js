// yarn 也是一个下载插件的工具 （国内的网址 不容易丢包）
// yarn 是从国内的地址去下载插件，比较稳定
// npm 是从国外的地址去下载插件，不太稳定
// npm 下载容易丢包，yarn下载不容易丢包
//安装： npm i yarn -g 就是把yarn安装到全局
// yarn add jquery 安装jquery
// yarn add xx@3.1.1

// npm root -g 查看下载到哪里了（查看全局依赖存储的路径）

// nrm 切换或者查看当前下载源的工具
// npm i nrm -g

/*
如果nrm不能正常使用，就按照以下进行操作
 window npm root -g    const NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');
1. 在终端输入 npm root -g
2.复制路径 ，然后打开我的电脑，把路径粘贴到上边窗口的上边回车
3.打开nrm里的cli.js
4.把17行的代码改成下边的代码
const NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');
 */


 /* 
 
 npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
* taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/
 */
//  org一般都是国际的网址
// com一般都是国内网址
// nrm use taobao 走的是淘宝镜像（切换网）

// 继续写demo