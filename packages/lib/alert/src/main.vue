<template>
    <transition name="vu-alert-show">
        <div class="vu-alert_container" v-show="showAlert">
            <div class="alert-box" @click="stopPropagation" :style="widthStyle+heightStyle">
                <div class="title">
                    {{option.title}}
                    <div class="close-icon" @click="close">×</div>
                </div>
                <p class="content" :style="contentHeightStyle">
                    {{option.content}}
                </p>
                <div class="buttons">
                    <vu-button
                    v-for="(item,index) in option.buttons"
                    :key="index"
                    size="small"
                    :color="item.type || 'default'" 
                    @click="buttonClick(item)">{{item.text || '按钮'}}</vu-button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import vuButton from '../../button/src/main.vue'
export default {
    components: {
        vuButton
    },
    data(){
        return {
            showAlert: false,
            optionModel: {
                title: '提示',
                width: '350px',
                height: 'auto',
                contentHeight: '200px',
                buttons: [
                    {
                        text: '取消',
                        type: 'default'
                    },
                    {
                        text: '确定',
                        type: 'error'
                    }
                ]
            },
            option: {}
        }
    },
    computed: {
        widthStyle(){
            return `width:${this.option.width};`
        },
        heightStyle(){
            return `height:${this.option.height};`
        },
        contentHeightStyle(){
            return `max-height:${this.option.contentHeight}`
        }
    },
    methods: {
        alert(option){
            this.option = Object.assign({...this.optionModel},option)
        },
        close(){
            this.showAlert = false
        },
        show(){
            this.showAlert = true
        },
        stopPropagation(){
            window.event.stopPropagation()
        },
        buttonClick(item){
            if(item.close !== false){
                this.close()
            }
            item.click ? item.click() : null
            this.buttonWatch(item)
        },
        buttonWatch(){}
    }
}
</script>