import message from './src/main.vue'
import Vue from 'vue'

let messageConstructor = Vue.extend(message)
let instance = new messageConstructor()

const Message = function (option = {}) {
    if (typeof option === 'string' || typeof option === 'number') {
        option = {
            content: option
        }
    }
    instance.addMsg(option)
    instance.$mount()
    document.body.appendChild(instance.$el)
}

let types = ['success', 'error', 'warning', 'info']
types.forEach(type => {
    Message[type] = (options) => {
        if (typeof options === 'string' || typeof option === 'number') {
            options = {
                content: options
            }
        }
        options.type = type
        return Message(options)
    }
})

export default Message