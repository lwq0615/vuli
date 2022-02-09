import alert from './src/main.vue'
import Vue from 'vue'

let alertConstructor = Vue.extend(alert)
let instance = new alertConstructor()

const Alert = function (option = {}) {
    if (typeof option === 'string' || typeof option === 'number') {
        option = {
            content: option
        }
    }
    instance.alert(option)
    instance.$mount(); // 渲染组件
    document.body.appendChild(instance.$el)
    instance.show()
    return Alert
}

Alert.then = function(fun){
    instance.buttonWatch = fun
}

Alert.close = instance.close

export default Alert