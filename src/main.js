import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
// 导入自己的样式表
// import iconfont from './assets/fonts'
// 导入全局样式表
import './assets/css/global.css'
Vue.config.productionTip = false
// 配置请求的根路径
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
Vue.prototype.$http = axios
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
