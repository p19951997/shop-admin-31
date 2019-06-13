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

import Goodslist from './pages/Goodslist.vue'
import CategoryList from './pages/CategoryList.vue'
import GoodsAdd from './pages/GoodsAdd.vue'

import VueRouter from 'vue-router'



// 注册路由
Vue.use(VueRouter);

//element:2.注册element插件
Vue.use(ElementUI);

const routes = [
  { path:'/',redirect:'/admin/goods-list',meta:'首页'},
  { path:'/login',component:Login,meta:'登录' },
  { path:'/admin',component:Admin,meta:'后台管理',children:[
      { path:'goods-list',component:Goodslist,meta:'商品列表' },
      { path:'category-List',component:CategoryList,meta:'栏目列表' },
      { path:'goods-add',component:GoodsAdd,meta:'新增商品' }
  ]}
];

// 路由实例
const router = new VueRouter({ routes })

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
