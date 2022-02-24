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
            default: true
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

<style lang="scss" scoped>
.vu-tooltip_container {
    display: inline-block;
    position: relative;
    .tooltip {
        position: absolute;
        z-index: 99;
        .content {
            padding: 7px 10px;
            border-radius: 5px;
            font-size: 13px;
        }
        .sjx {
            width: 0;
            height: 0;
        }
    }

    .tooltip.top {
        top: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-100%);
        .sjx {
            margin: 0 auto;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
        }
    }

    .tooltip.bottom {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        .sjx {
            margin: 0 auto;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
        }
    }

    .tooltip.left {
        top: 50%;
        left: 0;
        transform: translateX(-100%) translateY(-50%);
        display: flex;
        align-items: center;
        .content{
            flex: 1;
        }
        .sjx {
            margin: 0 auto;
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
        }
    }

    .tooltip.right {
        top: 50%;
        right: 0;
        transform: translateX(100%) translateY(-50%);
        display: flex;
        align-items: center;
        .content{
            flex: 1;
        }
        .sjx {
            margin: 0 auto;
            border-top: 7px solid transparent;
            border-bottom: 7px solid transparent;
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
</style>