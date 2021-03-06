// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import store from './vuex/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueClipboards from '../node_modules/vue-clipboard2/vue-clipboard.js'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'

import './css/hh.css'



Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.qs = Qs


Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(VueClipboards)

//跨域保存session值
axios.defaults.withCredentials = true;


/*自定义时间过滤器*/
Vue.filter('dateFilter',function(val){
  var date=new Date(val);
  var m=date.getMonth()+1;
  var d=date.getDate();
  var h=date.getHours();
  var min=date.getMinutes();
  var s=date.getSeconds();
  m<10&&(m="0"+m);
  d<10&&(d="0"+d);
  h<10&&(h="0"+h);
  min<10&&(min="0"+min);
  s<10&&(s="0"+s);
  return `${m}-${d} ${h}:${min}:${s}`;
 });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
