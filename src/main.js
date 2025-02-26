import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
import router from './router'
import './plugins/vuesax.js'
import 'boxicons'

Vue.config.productionTip = false

new Vue({
  Vuesax,
  router,
  colors: {
    primary:'#5b3cc4',
    success:'rgb(23, 201, 100)',
    danger:'rgb(242, 19, 93)',
    warning:'rgb(255, 130, 0)',
    dark:'rgb(36, 33, 69)'},
  render: h => h(App)
}).$mount('#app')
