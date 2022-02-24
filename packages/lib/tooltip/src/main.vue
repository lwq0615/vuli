<template>
    <div class="vu-tooltip_container" @mouseenter="mouseenter" @mouseover="mouseover" @mouseout="mouseout">
        <slot></slot>
        <transition name="fade" v-if="!disable">
            <div class="tooltip top" v-show="show" v-if="direction === 'top'">
                <div class="content" :style="contentStyle">{{content}}</div>
                <div class="sjx" :style="sjxStyle"></div>
            </div>
            <div class="tooltip bottom" v-show="show" v-if="direction === 'bottom'">
                <div class="sjx" :style="sjxStyle"></div>
                <div class="content" :style="contentStyle">{{content}}</div>
            </div>
            <div class="tooltip left" v-show="show" v-if="direction === 'left'">
                <div class="content" :style="contentStyle">{{content}}</div>
                <div class="sjx" :style="sjxStyle"></div>
            </div>
            <div class="tooltip right" v-show="show" v-if="direction === 'right'">
                <div class="sjx" :style="sjxStyle"></div>
                <div class="content" :style="contentStyle">{{content}}</div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'vu-tooltip',
    props: {
        content: {
            type: String,
            default: 'tooltip'
        },
        color: {
            type: String,
            default: '#E44258'
        },
        fontColor: {
            type: String,
            default: 'white'
        },
        direction: {
            type: String,
            default: 'top'
        },
        width: String,
        fontSize: String,
        value: Boolean,
        disable: Boolean,
        manual: Boolean,
        enterable: {
            type: Boolean,
            default: false
        }
    },
    model: {
        prop: 'value',
        event: 'model'
    },
    data() {
        return {
            show: false
        }
    },
    watch: {
        value(newVal){
            this.showTip(newVal)
        }
    },
    computed: {
        contentStyle(){
            let style = `background-color:${this.color};color:${this.fontColor};`
            if(this.width){
                style += `width:${this.width};`
            }else{
                style += `white-space: nowrap;`
            }
            if(this.fontSize){
                style += `font-size: ${this.fontSize};`
            }
            return style
        },
        sjxStyle(){
            switch(this.direction){
                case 'top': {
                    return `border-top: 7px solid ${this.color};`
                }
                case 'bottom': {
                    return `border-bottom: 7px solid ${this.color};`
                }
                case 'left': {
                    return `border-left: 7px solid ${this.color};`
                }
                case 'right': {
                    return `border-right: 7px solid ${this.color};`
                }
            }
            
        }
    },
    methods: {
        showTip(bool){
            if(this.show !== bool){
                this.show = bool
                this.$emit('model',bool)
            }
        },
        mouseover(){
            if(this.manual || !this.enterable){
                return
            }
            this.showTip(true)
        },
        mouseenter(){
            if(this.manual || this.enterable){
                return
            }
            this.showTip(true)
        },
        mouseout(){
            if(this.manual){
                return
            }
            this.showTip(false)
        }
    }
}
</script>