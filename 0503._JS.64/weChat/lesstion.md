## 1、介绍小程序
- 不是html5页面
    - 微信开发者工具「可以在手机上查看」
    - 微信app中运行
- 用完即走（可以跨平台使用，安卓ios通用，不能做逻辑比较复杂的功能,不能路由跳转过多的页面）
    - 没有node_modules，下载很快几乎感知不到，项目不能太大
- 一次开发，多端共享
- 微信用户量很庞大，几乎人人随时可用
- 缓存最多10M,所以速度会很快
    - 可能连10m都没有，太大的可能就无法打开使用了
- 不用下载和安装（编译后的包不会超过1M）体积很小，其实不是不需要下载，只是体积很小，打开的时候就缓存到本地了，用户体验很好
- 小程序只会在安卓、ios和开发者工具上运行（在浏览器上无法运行）
- javascript是由三大部分组成的：ECMAScript（核心操作）、DOM（文档对象模型）、BOM（浏览器对象模型）
- 小程序不支持DOM，也就是说他不能通过document.getElementBy什么什么拿dom了
- 小程序不支持BOM，也就是说他没有window这个属性对象，也就不支持window下的功能了

## 2、下载微信小程序开发者工具
window32 window64 mac
下载地址： https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

    - 上线必须使用AppId 
        - AppId->微信公共平台->注册->版本管理-》管理-》上传-》提交审核
        - 开发-》开发管理-》开发设置-》AppId
        - 开发-》开发管理-》运维中心-》错误日志
    - 详情-》本地设置-》校验
- 埋点为pm和数据运营做支持的

- sitemap.json 所有页面都可以检索到
- 起步-》目录结构
## 3、quick start 介绍目录(讲讲每个文件是干啥的，项目都由哪些文件组成)
- wxss css文件  --- 类选择器（.class）、ID选择器（#id）、元素选择器（view）、并列选择器（view, text）、伪类选择器
- wxml html文件
- js js文件
- json 配置文件

## 4、新启动项目，开启第一个微信小程序（把原来的东西都删掉）
- 在这里首先要把view和text标签讲了，最基础的两个标签；然后在讲wxss和css的区别，主要的区别就是样式单位rpx和选择器，还有微信小程序一般的设计稿都是以iphone6为基准（在iphone6下 1rpx= 0.5px）（这些东西放到写log页面的是时候再去讲）
  
- 搭建结构
- 编写helloWorld
- 配置导航条（app.json里的window属性）
- 新的rpx单位
- 样式选择器的介绍（到时候去官方文档上去看）
- flex布局（使用一下flex布局，很常用）

## 5、事件
- 冒泡（bindtap，从里往外执行）
- 非冒泡（catchtap）
- 事件的写法包括带冒号和不带冒号（都可以）
- 事件的事件源（在绑定事件的组件的行内写上data-name="",写的这个参数会在事件源里拿到，这是主要的用途）

## 5.5 配置tabbar
- 在这里讲一下switchTab路由以及会执行的生命周期函数
- tabbar的规定个数（5个）
- 配置tabbar的样式
- tabbar的页面路径要使用相对路径（绝对路径在编译时会出错）
  
## 6、页面跳转（路由）
- navigateTo（保留当前页面，然后打开一个新页面，但是不能跳到tabbar页面）
- switchTab（跳转tabbar页面，并关闭其他所有非tabbar页面）
- redirectTo（页面重定向，关闭当前页面，打开一个新页面）
- reLaunch（关闭所有页面，打开一个新页面「tabBar或者非tabBar都可以」）
- navigateBack（关闭当前页面，返回上一级或者多级页面，只有navigateTo方式跳转的页面才可以返回，因为只有 navigate跳转的页面才不会被卸载）
- 跳转的url是相对和绝对路径都可以（在tabber配置的地方要写绝对路径）
- 利用组件跳转navigator，添加open-type属性和url属性
- getCurrentPages()，他是存放的页面栈,就是当前打开了没有销毁的页面，都会在这里栈里面。
  
## 7、生命周期
- 页面生命周期的介绍
- 以及不同的路由跳转前后页面的生命周期的执行


## 8、页面之间的参数传递
- 通过路由传参
- 通过全局变量传参（getApp）

## 在这里会把页面路由跳转、页面生命周期函数、路由传参以及全局定义变量讲完（这里最好用一个半小时讲完）
  




## 9、视图层的数据绑定
- 在js的data里设置数据，在wxml里通过{{}}拿数据
- 数据列表的渲染（就是数据循环）wx:for="";在这里重点讲for循环数据
    - 数据每一项的默认名为item，索引为index，如果想要修改每一项的名字和索引的名字那就使用
        - 使用 wx:for-item 可以指定数组当前元素的变量名，
        - 使用 wx:for-index 可以指定数组当前下标的变量名：
- 条件的渲染，在这里要讲if和hidden的区别和用法


## 10、组件和模板(如果时间有限只讲组件)
- 模板：模板没有js和json，只有wxml和wxss（使用的时候还要把css样式导入）
- 模板传参

- 页面的样式可以继承，但是组件的如果自己没有，没有办法拿到外面的样式，因为组件是独立的

- 组件：跟页面类似（有4个基础页面）
- 组件之间的参数来回传递
- 子传父  this.triggerEvent('event', a)
- 组件的插槽单个使用以及多个使用
- 使用多个插槽时，一定要在js中开启多插槽模式 options: {multipleSlots: true}



## 9.5、阿里巴巴字体图标的使用
- 在组件中使用字体图标库，还得在组件的wxss中引入iconfont样式


## 这里会把自定义组件、视图层的数据渲染、if、for、hidden讲完（）

-------------------------------------------------------------------（这里最好是一上午三个小时的内容）


## 10、表单组件的讲解
- radio和radio-group组件的讲解
- input和textarea的讲解
- picker的讲解
- button的讲解
- form的讲解


## 13.6 一些toast提示框
- showMoudle
- showToast
- loadingToast




## 到这里应该把表单、提示框讲完（）



## 14、request的网络请求（apistore网站有接口）
- 查询物流单号

--------------------------------------------------------------------（）


## 如果时间充裕，那就给大家讲讲动画、背景音乐、本地存储和轮播图



## 12、背景音乐的使用

## 14、animation动画的使用（背景音乐跟动画一起讲）


## 10.5 本地存储
- wx.getStorageSync
- wx.setStorageSync
- wx.clearStorageSync

## 11、轮播图组件的使用
- 轮播图写样式要写到最外层组件swiper上，写到swiper-item是不起作用的（比如规定图片的高度，要首先定义swiper的高度）


--------------------------------------------------------------------------------------（）




## 17、一个小demo（）


----------------------------------------------------------

- <text> 行内元素
- <view> 块元素
- 事件 bind:tap="fn" 点击事件 bind==on 可以省略:  tap===click  有冒泡  
- catch没有冒泡 
函数不支持传参