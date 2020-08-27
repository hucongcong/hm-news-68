import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入通用的样式
import './styles/base.less'
import './styles/iconfont.css'
// 导入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 导入amfe-flexible库
import 'amfe-flexible'
import HmHeader from './components/HmHeader.vue'
// 全局注册组件
Vue.component('hm-header', HmHeader)

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
