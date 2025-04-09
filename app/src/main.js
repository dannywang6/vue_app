import Vue from 'vue'
import App from './App.vue'
let a = 10

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
