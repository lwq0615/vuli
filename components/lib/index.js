import button from './button'
import select from './select'
import selectOption from './select-option'
import slide from './slide'
import tabs from './tabs'
import tabPanel from './tab-panel'
import rotateCard from './rotate-card'
import radio from './radio'
import radioGroup from './radio-group'
import progress from './progress'
import Switch from './switch'
import message from './message'
import Alert from './alert'
import input from './input'
import checkboxGroup from './checkbox-group'
import checkbox from './checkbox'
import color from './color'
import calculator from './calculator'

const components = {
    button,
    select,
    selectOption,
    slide,
    tabs,
    tabPanel,
    rotateCard,
    radio,
    radioGroup,
    progress,
    Switch,
    input,
    checkboxGroup,
    checkbox,
    Alert,
    color,
    calculator
}

const install = function(Vue){
    if(install.installed){
        return
    }
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name,components[key])
    })
    Vue.prototype.$message = message
    Vue.prototype.$alert = Alert
}

export {
    install,
    message,
    button,
    select,
    selectOption,
    slide,
    tabs,
    tabPanel,
    rotateCard,
    radio,
    radioGroup,
    progress,
    Switch,
    input,
    checkboxGroup,
    checkbox,
    Alert,
    color,
    calculator
}

export default {install}