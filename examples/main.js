import Vue from 'vue'
import App from './App.vue'

import '../packages/css/index.scss'
import Vuli from '../packages/lib/index.js'

Vue.use(Vuli)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
