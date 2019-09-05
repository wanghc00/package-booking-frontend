import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import { Button } from 'ant-design-vue'


Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(Button)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
