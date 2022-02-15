<template>
    <div class="l-rotate-card_container" :style="size">
        <div 
            :class="`front ${extClass}`" 
            :style="`transition: all ${transformType} ${rotateTime};${side ? '' : transformStyle}`"
        >
            <slot name="front"></slot>
        </div>
        <div 
            :class="`back ${extClass}`" 
            :style="`transition: all ${transformType} ${rotateTime};${!side ? '' : transformStyle}`"
        >
            <slot name="back"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'l-rotate-card',
    props:{
        rotateTime:{
            type: String,
            default: '0.7s'
        },
        rotateType: {
            type: String,
            default: 'Y'
        },
        transformType: {
            type: String,
            default: 'ease'
        },
        extClass: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '300px'
        },
        height: {
            type: String,
            default: '400px'
        }
    },
    data(){
        return {
            side: true
        }
    },
    computed: {
        transformStyle(){
            let rotateTypes = {
                x: 'transform: rotateX(180deg);',
                X: 'transform: rotateX(180deg);',
                y: 'transform: rotateY(180deg);',
                Y: 'transform: rotateY(180deg);'
            }
            return rotateTypes[this.rotateType]
        },
        size(){
            return `width:${this.width};height:${this.height};`
        }
    },
    methods:{
        rotate(side){
            if(side === 'front'){
                this.side = true
            }else if(side === 'back'){
                this.side = false
            }else{
                this.side = !this.side
            }
            this.$emit('rotate',side ? 'front' : 'back')
        }
    }
}
</script>

<style lang="scss" scoped>
.l-rotate-card_container{
    display: inline-block;
    position: relative;
    .front, .back{
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
        overflow: hidden;
        transition: all ease 0.7s;
    }
}
</style>>