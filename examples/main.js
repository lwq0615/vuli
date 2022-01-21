import Vue from 'vue'
import App from './App.vue'

import '../components/css/index.scss'
import luckUi from '../components/lib/index.js'

Vue.use(luckUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
