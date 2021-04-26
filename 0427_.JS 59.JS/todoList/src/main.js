import Vue from 'vue' //引入的时候把第三方模块放在最上面
import { Button, Select, Loading, MessageBox, Notification, Message, Divider, Tag, Table, TableColumn, Dialog, Input, DatePicker, Form, FormItem,} from 'element-ui';
import App from './App.vue' //自定义放在最下面
import store from './store'


// 把elementUi中的所有组件全部引入到vue项目中
// import ElementUI from 'element-ui';

// Vue.use(ElementUI);
Vue.use(Button);
Vue.use(Select);
Vue.use(Divider);
Vue.use(Tag);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(DatePicker);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Loading.directive);
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
