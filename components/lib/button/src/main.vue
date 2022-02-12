<template>
    <button 
        class="l-button_button"
        :style="`background-color:${btnColor};color:${textColor};font-size:${fontSize}`"
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
        textColor: {
            type: String,
            default: 'white'
        },
        fontSize: {
            type: String,
            default: '14px'
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
            return colors[this.color] || this.color
        }
    }
}
</script>