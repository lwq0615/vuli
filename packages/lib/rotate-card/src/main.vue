<template>
    <div class="vu-rotate-card_container" :style="size">
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
    name: 'vu-rotate-card',
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