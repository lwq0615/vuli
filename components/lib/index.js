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
import alert from './alert'
import input from './input'
import checkboxGroup from './checkbox-group'
import checkbox from './checkbox'
import color from './color'
import calculator from './calculator'
import tag from './tag'
import sider from './sider'
import upload from './upload'
import tooltip from './tooltip'
import row from './row'
import col from './col'

const components = [
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
    alert,
    color,
    calculator,
    tag,
    sider,
    upload,
    tooltip,
    row,
    col
]

const install = function(Vue){
    components.forEach(item => {
        Vue.component(item.name,item)
    })
    Vue.prototype.$message = message
    Vue.prototype.$alert = alert
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
    alert,
    color,
    calculator,
    tag,
    sider,
    upload,
    tooltip,
    row,
    col
}

export default { install }