<template>
    <button 
        class="l-button_button"
        :style="`background-color:${btnColor};width:${width};height:${height};color:${textColor};font-size:${fontSize}`"
        @click="click()"
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
        width: {
            type: String,
            default: '100px'
        },
        height: {
            type: String,
            default: '40px'
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
    },
    methods:{
        click(){
            this.$emit('click')
        }
    }
}
</script>

<style lang="scss" scoped>
@import './button.scss';
</style>>