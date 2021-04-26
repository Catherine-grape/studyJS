## src中的文件

### assets 静态资源
- assets文件夹是存储当前项目的静态资源

### components
- 存放当前项目的公共组件的

### router
- 存放的是当前项目的路由的配置信息

### store
- 存放的是当前项目的公共状态管理库「store仓库」的配置信息

### views/pages
- 可能是views或者pages 存储的是当前项目的页面级大组件。比如小组件是用在Home.vue大组件中，那就建一个文件夹，把Home.vue和小组件放在一起「小组件只使用在大组件中」

### App.vue
- 当前项目的根组件

### main.js
- 当前的vue的根实例
- webpack打包编译的入口文件
    - import Vue from 'vue' 第三方或者内置的不需要写路径直接写名字
    - import App from './App.vue'  自己写的就需要写路径
    - $mount('#app')与el:"#app" 是一样的
    -  render: h => h(App)  原本是 render: (h)=>{return h(App)}  渲染函数

#### vue.config.js
-     outputDir: 'build',//改变打包文件夹的名字

-  lintOnSave:false 关闭 eslint检查

## 项目初始

#### 组件构成
- 在components中新建一个公共的小组件
    - template 视图  script逻辑  style样式
    - style lang="less" 选择你style的语言   // scoped 的作用就是让当前的样式只对当前组件生效

    - 需要有export default 导出
    - 在需要组件的vue中导入

#### App.vue
- 当导入的时候路径结尾的.vue和.js可以省略


#### store

Vue.use(Vuex) 在工程化项目中必须有这句话
- export default new Vuex.Store({})导出的是当前构造函数的实例
- 导出后在main.js中使用，使用导入import store from './store/index' ===  import store from './store' 当引入的时候如果文件名是index可以省略不写

- com-first
- 在组件中 可以直接导入并解构，然后在computed中直接使用
import { mapState } from "vuex";
  computed: {
    ...mapState(["num"]),
  },

- index.js 是主仓库 「把主文件叫做index」
    - com-first.js 就是com1的私有仓库
    - com-second.js 就是com2的私有仓库

### 导入与导出
- 导出的时候使用的是export default{} 那么导入的时候  import com1 from './com-first' 这个com1可以随意编写名字

- 如果导出的时候 使用的是 下面这种 那么导入的时候需要解构，import {fn,a} from './xxx'  使用的名字必须是什么导出时的
export function fn( ){}
export var a=100



//---------------------------
import { createNamespacedHelpers } from 'vuex';

let { mapState, mapMutations } = createNamespacedHelpers('com1');
createNamespacedHelpers助手会帮助咱们把模块名字自动加上，下面使用的时候就不需要加了

 ...mapState(['msg'])

//----------------
这种需要在下面使用的时候加上模块名字
import { mapState,mapMutations } from "vuex";

...mapState(["num"]),//公共的
...mapState('com1',['msg']),//私有的

- 组件，有时会把主组件叫做index.vue 或者与文件夹名字一致



store 
- index是主仓库

Vue.use(Vuex); use与_install有关系 与中间键无关


组件中页面需要东西的时候就要return 

map(paseInt)  paseInt是转进制的 第一个是字符 第二个是什么进制


## Element 网站快速成型工具
npm i element-ui -S


完整引入element，在main.js中

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});