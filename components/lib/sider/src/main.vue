<template>
    <div class="l-sider_container" ref="container">
        <div class="sider" @click="siderClick" :style="cursorStyle" @mouseenter="showTip(true)" @mouseout="showTip(false)">
            <div class="front" ref="front" :style="widthStyle+colorStyle">
                <div class="icon" 
                @mousedown="mousedown" 
                :style="borderStyle+iconSizeStyle+cursorStyle" 
                @click="$event.stopPropagation()">
                    <transition name="fade">
                        <div class="tip" v-show="tip && showTipFlg">
                            <div class="text">{{format(activeValue)}}</div>
                            <div class="sjx"></div>
                        </div>
                    </transition>
                </div>
            </div>
            <div 
            class="point" 
            v-for="index in ponitCount" 
            :key="index" 
            v-show="stepPoint && index > activeValue/step"
            @click="changeValue(index*step)"
            :style="`left: ${index*step}%;`"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'l-sider',
    props: {
        value: Number,
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
        }
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    data(){
        return {
            activeValue: 0,
            showTipFlg: false
        }
    },
    created(){
        this.activeValue = this.value || this.activeValue
    },
    computed: {
        widthStyle(){
            return `width:${this.activeValue || 0}%;`
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
            if(this.activeValue !== percentage){
                if(this.step){
                    if(percentage%this.step >= this.step/2){
                        percentage = Math.ceil(percentage/this.step)*this.step
                    }else{
                        percentage = Math.floor(percentage/this.step)*this.step
                    }
                }
                this.$emit('change',percentage)
                this.activeValue = percentage
            }
        },
        showTip(bool){
            this.showTipFlg = bool
        }
    }
}
</script>