<template>
    <transition name="vui-alert-show">
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
                    <button
                    v-for="(item,index) in option.buttons"
                    :key="index"
                    :class="item.type || 'default'" 
                    @click="buttonClick(item)">{{item.text || '按钮'}}</button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
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
                        type: 'enter'
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

<style lang="scss" scoped>
.vu-alert_container {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 99;
    user-select: none;
    background-color: rgba($color: #000000, $alpha: 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10%;
    .alert-box {
        user-select: text;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        transition: all ease 0.3s;
        padding: 10px 15px;
        .title {
            margin: 0;
            font-size: 17px;
            position: relative;
            .close-icon{
                display: flex;
                width: 20px;
                height: 20px;
                justify-content: center;
                align-items: center;
                position: absolute;
                right: 0;
                top: 50%;
                transform: translateY(-50%);
                font-size: 20px;
                color: #E44258;
                cursor: pointer;
                user-select: none;
            }
        }
        .content{
            color: #606266;
            overflow: auto;
        }
        .content::-webkit-scrollbar {
            display: none;
        }
        .buttons{
            text-align: right;
            button{
                margin-left: 10px;
                padding: 7px 14px;
                font-size: 13px;
                border-radius: 4px;
                border: 1px solid #e4e7ed;
                background-color: white;
                cursor: pointer;
                transition: all linear 0.1s;
            }
            .error{
                background-color: #E44258;
                color: white;
            }
            .default:hover{
                background-color: rgba($color: #E44258, $alpha: 0.1);
                color: #E44258;
            }
            .error:hover{
                background-color: rgba($color: #E44258, $alpha: 0.8);
            }
            .enter{
                background-color: #409eff;
                color: white;
            }
            .enter:hover{
                background-color: rgba($color: #409eff, $alpha: 0.8);
            }
        }
    }
}

.vui-alert-show-enter-active,
.vui-alert-show-leave-active {
    transition: all 0.3s;
}
.vui-alert-show-enter,
.vui-alert-show-leave-to {
    opacity: 0;
    .alert-box {
        transform: rotateY(45deg) rotateX(45deg);
    }
}
</style>