/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-04-20 18:00:54
 * @LastEditors: Roy
 * @LastEditTime: 2021-04-20 20:15:57
 * @Deprecated: 否
 * @FilePath: /datav-mobile/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ECharts from 'vue-echarts'
import 'echarts'
import './styles/reset.css'

createApp(App)
  .use(store)
  .use(router)
  .component('v-chart', ECharts)
  .mount('#app')
