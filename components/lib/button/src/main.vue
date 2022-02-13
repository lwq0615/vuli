<template>
    <button 
    :class="`l-button_button ${size}`"
    :style="btnColor"
    @click="$emit('click',$event)"
    ><slot></slot></button>
</template>

<script>
export default {
    name: 'l-button',
    props:{
        color: {
            type: String,
            default: '#E44258'
        },
        size: {
            type: String,
            default: 'default'
        }
    },
    computed:{
        btnColor(){
            let colors = {
                primary: '#409EFF',
                success: '#67C23A',
                info: '#909399',
                warning: '#E6A23C',
                error: '#F56C6C'
            }
            return `background-color:${colors[this.color] || this.color};`
        }
    }
}
</script>