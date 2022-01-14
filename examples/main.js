import Vue from 'vue'
import App from './App.vue'

import '../components/css/test.scss'
import test from '../components/lib/test/index.js'

Vue.use(test)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
