import button from './button'
import select from './select'
import slide from './slide'
import tabs from './tabs'
import tabPanel from './tab-panel'

const components = {
    button,
    select,
    slide,
    tabs,
    tabPanel
}

const install  = function(Vue){
    if(install.installed){
        return 
    }
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name,components[key])
    })
}

export default {
    install
}