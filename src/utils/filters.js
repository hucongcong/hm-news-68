/* 配置全局的过滤器 */
import Vue from 'vue'
import moment from 'moment'
// 定义全局过滤器
Vue.filter('time', input => {
  return moment(input).format('YYYY-MM-DD')
})
