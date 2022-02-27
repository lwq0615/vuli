<template>
    <section class="vu-badge_container">
        <slot></slot>
        <div class="badge" v-show="show && (isDot || text !== '')" :style="textStyle">{{isDot ? '' : text}}</div>
    </section>
</template>

<script>
export default {
    name: 'vu-badge',
    props: {
        text: {
            type: [String,Number],
            default: ''
        },
        color: {
            type: String,
            default: '#E44258'
        },
        fontColor: {
            type: String,
            default: 'white'
        },
        fontSize: String,
        isDot: Boolean,
        show: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        textStyle(){
            let style = ``
            if(this.fontSize){
                style += `font-size: ${this.fontSize};`
            }
            if(this.color){
                let colors = {
                    primary: '#409EFF',
                    success: '#67C23A',
                    info: '#909399',
                    warning: '#E6A23C',
                    error: '#F56C6C'
                }
                style += `background-color: ${colors[this.color] || this.color};`
            }
            if(this.fontColor){
                style += `color: ${this.fontColor};`
            }
            if(this.fontSize){
                style += `font-size: ${this.fontSize};`
            }
            if(this.isDot){
                style += 'padding: 4px;'
            }
            return style
        }
    }
}
</script>

<style lang="scss" scoped>
.vu-badge_container {
    position: relative;
    display: inline-block;
    .badge{
        padding: 1px 6px;
        background-color: #E44258;
        color: white;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-40%);
        z-index: 3;
        font-size: 12px;
        border-radius: 100px;
        border: 1px solid white;
    }
}
</style>