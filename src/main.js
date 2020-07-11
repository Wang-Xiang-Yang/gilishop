import Vue from 'vue'
import App from '@/main'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})
