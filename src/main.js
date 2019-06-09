import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';


//element:1.导入组件
import ElementUI from 'element-ui';
//element的样式
import 'element-ui/lib/theme-chalk/index.css';

// 导入组件
import Login from './pages/Login.vue';
import Admin from './pages/Admin.vue';

import VueRouter from 'vue-router'

// 注册路由
Vue.use(VueRouter);

//element:2.注册element插件
Vue.use(ElementUI);

const routes = [
  // { path:'/',redirect:'/admin' },
  { path:'/login',component:Login },
  { path:'/',component:Admin }
];

// 路由实例
const router = new VueRouter({ routes })

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
