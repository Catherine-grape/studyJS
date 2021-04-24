### 脚手架
帮助我们把webpack等相关配置都处理好，我们只需要基于脚手架快速构建一个项目即可（项目中一定包含webpack的相关配置）

### vue中的脚手架vue-cli
https://cli.vuejs.org

1. 安装脚手架（一般安装在全局）
$ npm install @vue/cli -g
OR
$ yarn global add @vue/cli

安装成功后，全局环境下会生成一个 $ vue 的可执行命令，基于 $ vue --version 查看版本号

2. 创建工程化的项目
$ vue create 项目名称（遵循npm包名称规范：数字或小写字母）


cd tab 可以找到desktop
 vue create 文件名  --> Manually select features --->Choose Vue version, Babel, Linter-->2.x-->Airbnb-->Lint on save-->In package.json-->y-->asd「快捷键:保存了这次的配置，后面都不用配置了」

### 项目的结构
  |- public 存放的是一些公共的东西
    |- index.html 当前项目的主页面的html模板
    |- xxx  以后还有可能存放别的模板

  |- src 这里存储的是我们开发时候的项目的源代码
    |- assets 存放的是项目里的静态资源
      | - xxx.png
      |-  xxx.css
    |- components 存放的是当前项目的公共的组件
    |- views(pages) 存放的页面级的大组件
    |- App.vue 项目页面的入口文件
    |- main.js webpack编译或者打包的入口文件


开发模式下，我们基于这个命令启动一个本地服务，把基于webpack编译后的内容预览
$ npm run serve

生产模式下，把写好的内容进行编译打包，最后部署到服务器上
$ npm run build

### 修改webpack的默认配置项
 - 需要在目录中设置vue.config.js