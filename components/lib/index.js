import button from './button'
import select from './select'
import slide from './slide'
import tabs from './tabs'
import tabPanel from './tab-panel'
import rotateCard from './rotate-card'
import radio from './radio'
import radioGroup from './radio-group'
import progress from './progress'
import Switch from './switch'
import message from './message'
import input from './input'

const components = {
    button,
    select,
    slide,
    tabs,
    tabPanel,
    rotateCard,
    radio,
    radioGroup,
    progress,
    Switch,
    input
}

const install = function(Vue){
    if(install.installed){
        return
    }
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name,components[key])
    })
    Vue.prototype.$message = message
}

export {
    install,
    message,
    button,
    select,
    slide,
    tabs,
    tabPanel,
    rotateCard,
    radio,
    radioGroup,
    progress,
    Switch,
    input
}

export default {install}