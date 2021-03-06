import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js' // 文件夹里的index.js可以省略不写

// 把elementUi中的所有组件全部引入到vue项目中
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

import {
  Button,
  Switch,
  Tag,
  Table,
  TableColumn,
  Dialog,
  Input,
  DatePicker,
  Divider,
  Message,
  Loading,
  MessageBox,
  Notification,
  Form,
  FormItem
  
} from 'element-ui';
Vue.use(Button);
Vue.use(Switch);
Vue.use(Tag);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(DatePicker);
Vue.use(Divider);
Vue.use(Form);
Vue.use(FormItem);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
