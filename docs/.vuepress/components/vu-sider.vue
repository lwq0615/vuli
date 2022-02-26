<template>
    <div class="vu-sider_container" ref="container">
        <div class="sider" @click="siderClick" :style="cursorStyle" @mouseover="showTip(true)" @mouseout="showTip(false)">
            <div class="front" ref="front" :style="widthStyle+colorStyle">
                <div class="icon" 
                @mousedown="mousedown" 
                :style="borderStyle+iconSizeStyle+cursorStyle" 
                @click="$event.stopPropagation()">
                    <transition name="fade">
                        <div class="tip" v-show="tip && showTipFlg">
                            <div class="text">{{format(value)}}</div>
                            <div class="sjx"></div>
                        </div>
                    </transition>
                </div>
            </div>
            <div 
            class="point" 
            v-for="index in ponitCount" 
            :key="index" 
            v-show="stepPoint && index > value/step"
            @click="changeValue(index*step)"
            :style="`left: ${index*step}%;`"></div>
        </div>
        <input 
        type="text" 
        style="display: none;" 
        v-model="value" 
        :name="name">
    </div>
</template>

<script>
export default {
    name: 'vu-sider',
    props: {
        value: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            default: '#E44258'
        },
        iconSize: {
            type: String,
            default: '13px'
        },
        format: {
            type: Function,
            default: function(percentage){
                return percentage
            }
        },
        tip: {
            type: Boolean,
            default: true
        },
        disable: {
            type: Boolean,
            default: false
        },
        step: Number,
        stepPoint: {
            type: Boolean,
            default: false
        },
        name: String
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    data(){
        return {
            showTipFlg: false
        }
    },
    computed: {
        widthStyle(){
            return `width:${this.value || 0}%;`
        },
        colorStyle(){
            return `background-color:${this.disable ? '#c0c4cc' : this.color};`
        },
        borderStyle(){
            return `border:2px solid ${this.disable ? '#c0c4cc' : this.color};`
        },
        iconSizeStyle(){
            return `width:${this.iconSize};height:${this.iconSize};`
        },
        cursorStyle(){
            return this.disable ? `cursor: not-allowed;` : ''
        },
        ponitCount(){
            if(!this.step){
                return 0
            }
            return Math.floor(99/this.step)
        }
    },
    watch: {
        value(newVal,oldVal){
            if(newVal !== oldVal){
                this.changeValue(newVal)
            }
        }
    },
    methods: {
        mousedown(downE){
            if(this.disable){
                return
            }
            let downX = downE.clientX
            let oldWidth = parseInt(window.getComputedStyle(this.$refs.front).getPropertyValue('width'))
            let siderWidth = parseInt(window.getComputedStyle(this.$refs.container).getPropertyValue('width'))

            let bool = true
            let o = null
            
            window.onmousemove = (moveE) => {
                if(!bool){
                    if(!o){
                        o = setTimeout(() => {
                            bool = true
                            o = null
                        },10)
                    }
                    return
                }
                let moveX = moveE.clientX - downX
                let newWidth = null

                if(oldWidth+moveX > siderWidth){
                    newWidth = siderWidth
                }else if(oldWidth+moveX < 0){
                    newWidth = 0
                }else{
                    newWidth = moveX + oldWidth
                }

                let percentage = Math.floor(newWidth/siderWidth*100)
                this.changeValue(percentage)

                bool = false
                this.showTip(true)
            }
            window.onmouseup = () => {
                window.onmousemove = null
            }
        },
        siderClick(e){
            this.$emit('click',this.value)
            if(this.disable){
                return
            }
            let siderWidth = parseInt(window.getComputedStyle(this.$refs.container).getPropertyValue('width'))
            let newWidth = e.offsetX
            let percentage = Math.floor(newWidth/siderWidth*100)
            this.changeValue(percentage)
        },
        changeValue(percentage){
            window.event.stopPropagation()
            if(this.step){
                if(percentage%this.step >= this.step/2){
                    percentage = Math.ceil(percentage/this.step)*this.step
                }else{
                    percentage = Math.floor(percentage/this.step)*this.step
                }
            }
            if(this.value !== percentage){
                this.$emit('change',percentage)
            }
        },
        showTip(bool){
            this.showTipFlg = bool
        }
    }
}
</script>

<style lang="scss" scoped>
.vu-sider_container {
    display: inline-block;
    width: 300px;
    height: 7px;
    user-select: none;
    .sider {
        display: flex;
        width: 100%;
        height: 100%;
        border-radius: 100px;
        background-color: #e4e7ed;
        cursor: pointer;
        position: relative;
        .front {
            position: relative;
            height: 100%;
            border-radius: 100px;
            .icon {
                background-color: white;
                position: absolute;
                top: 50%;
                left: 100%;
                transform: translateY(-50%) translateX(-50%);
                border-radius: 50%;
                user-select: none;
                z-index: 2;
                cursor: grab;

                .tip {
                    transition: all ease 0.2s;
                    position: absolute;
                    z-index: 99;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%) translateY(-115%);
                    .text {
                        padding: 5px 8px;
                        background-color: rgba($color: #e44258, $alpha: 0.9);
                        border-radius: 3px;
                        color: white;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 13px;
                    }
                    .sjx {
                        width: 0;
                        height: 0;
                        border-left: 6px solid transparent;
                        border-right: 6px solid transparent;
                        border-top: 6px solid rgba($color: #e44258, $alpha: 0.9);
                        margin: 0 auto;
                    }
                }

                .fade-enter-active,
                .fade-leave-active {
                    transition: opacity 0.2s;
                }
                .fade-enter, .fade-leave-to {
                    opacity: 0;
                }
            }
            .icon:active {
                cursor: grabbing;
            }
        }

        .point{
            position: absolute;
            top: 0;
            transform: translateX(-50%);
            width: 7px;
            height: 100%;
            border-radius: 50%;
            background-color: white;
        }
    }
}
</style>