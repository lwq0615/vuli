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
import image from './image'
import imageItem from './image-item'
import imageLight from './image-light'
import scroll from './scroll'
import dialog from './dialog'
import pagination from './pagination'

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
    col,
    image,
    imageItem,
    scroll,
    dialog,
    pagination
]

const install = function(Vue){
    components.forEach(item => {
        Vue.component(item.name,item)
    })
    Vue.prototype.$message = message
    Vue.prototype.$alert = alert
    Vue.prototype.$imageLight = imageLight
}

export {
    install,
    message,
    imageLight,
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
    col,
    image,
    imageItem,
    scroll,
    dialog,
    pagination
}

export default { install }