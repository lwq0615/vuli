import message from './src/main.vue'
import Vue from 'vue'

let messageConstructor = Vue.extend(message)
let instance = new messageConstructor()

const Message = function (option = {}) {
    if (typeof option === 'string') {
        option = {
            content: option
        }
    }
    instance.addMsg(option)
    instance.$mount(); // 渲染组件
    document.body.appendChild(instance.$el); // 挂载到 body 下
}

let types = ['success', 'error', 'warning', 'info']
types.forEach(type => {
    Message[type] = (options) => {
        if (typeof options === 'string') {
            options = {
                content: options
            }
        }
        options.type = type
        return Message(options)
    }
})

export default Message