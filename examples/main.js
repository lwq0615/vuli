import Vue from 'vue'
import App from './App.vue'

import '../packages/css/index.scss'
import luckUi from '../packages/lib/index.js'

Vue.use(luckUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
