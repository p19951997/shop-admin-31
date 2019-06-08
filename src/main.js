import Vue from 'vue';
import App from './App.vue';

//element:1.导入组件
import ElementUI from 'element-ui';
//element的样式
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios'

import VueRouter from 'vue-router'

// 注册路由
Vue.use(VueRouter);

const routes = [
  //{ path:'/login',component:Login }
];

// 路由实例
const router = new VueRouter({ routes })

Vue.prototype.$axios = axios;

//element:2.注册element插件
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
