import test from './test'

const components = {
    test
}

const install  = function(Vue){
    if(install.installed){
        return 
    }
    Object.keys(components).forEach(key => {
        Vue.components(components[key].name,components[key])
    })
}

export default {
    install
}