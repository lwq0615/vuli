import Dom from './src/main.vue'


Dom.install = function(Vue){
    Vue.component(Dom.name,Dom)
}

export default Dom