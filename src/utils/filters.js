/* 配置全局的过滤器 */
import Vue from 'vue'
import moment from 'moment'
// 给moment全局的定义语言环境
moment.locale('zh-CN')
// 定义全局过滤器
Vue.filter('time', (input, str = 'YYYY-MM-DD') => {
  return moment(input).format(str)
})

Vue.filter('now', input => {
  return moment(input).fromNow()
})
