import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/init.css'
import './element/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
