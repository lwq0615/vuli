import Vue from 'vue'
import App from './App.vue'

import '../packages/css/index.scss'
import Vui from '../packages/lib/index.js'

Vue.use(Vui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
