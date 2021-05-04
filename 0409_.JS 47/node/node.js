/* 
### 
node 一共有两个作用：
 1. 当安装node的时候会自动的把npm下载下来（npm可以对当前的项目所依赖的模块进行管理）
 在package.json中有一个scripts的属性，它里面可以配置快捷的命令执行方式（你在终端里输入的命令可以在scripts中设置一个快捷方式
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

 2. 把node当作环境，让js代码可以在服务器上运行「把node安装到服务器上（我的电脑上）就相当于在服务器上运行」

 node 1.js 「文件名」
  node 1    「js可以省略」

  lessc index.less index css   node权限不够
  "test": "lessc index.less index css"
  npm run text 
  package.json--> scripts 「test可以算一改变名字，也可以再添加」

###I/O
nodeJs 的特点：单线程、无阻塞I/O


<input type="file">「文件格式」


node 一个js文件就是一个闭包 node里面叫模块

vue使用moudle js

A模块 B模块
node中可以模块引模块  遵循CommonJs规范
模块当中相互引用
3. 在node环境中一切js文件都是一个独立的模块（就当作成一个闭包），而且模块之间可以相互的引入，这时候就使用到commonJs规范了，
在当前模块使用module.exports导出，在别的模块中使用require导入即可

4. 在node中的模块的类型一共有三种
  1. 自定义模块（在导入的时候必须有路径）
  2. 内置模块（node自带的模块用的时候不需要写路径，直接写模块名即可）
  3. 第三方模块 (如：npm i express)「使用npm安装的模块，引入的时候可以不加路径」，如果引入的时候没有加路径，那它会先找第三方的，如果第三方没有，就找node内置的，如果node内置也没有则会报错
*/

/* 
###
node一共两个作用：
  1.当安装node的时候会自动的把npm下载下来(npm可以对当前的项目所依赖的模块进行管理)

  // 在package.json中的有一个scripts的属性，他里边可以配置快捷的命令执行方式(你在终端里输入的命令可以在scripts中设置一个快捷方式)
  "scripts": {
    "abcd": "lessc index.less index.css",
    "a":"node 1.js"
  },

  2.把node做当环境，让js代码可以在服务器上运行

  // 3.在node环境中一切js文件都是一个独立的模块(就当做成一个闭包)，而且模块之间可以相互的引入，这时候就使用到CommonJs规范了，
  在当前模块使用module.exports导出，在别的模块中使用require导入即可


  4.在node中的模块的类型一共有三种
    1.自定义模块(在导入的时候必须有路径)
    2.内置模块(node自带的模块，引入的时候不需要写路径)
      	+ http/https 创建和管理服务的模块
        + fs 给予JS进行I/O操作的
        + url 解析URL地址的
        + path 管理路径的
        + ...
    3.第三方模块(咱们拿npm安装的模块，引入的时候可以不加路径)，

    // 如果引入的时候没有加路径，那他先找第三方的，如果第三方没有就找node内置的，如果node内置也没有，就报错了


    谁用就导谁，不要通过中间的模块作为介质

    
*/


