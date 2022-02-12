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

<style lang="scss" scoped>
.l-button_button{
   border-radius: 6px;
   border: 1px solid #e4e7ed;
   cursor: pointer;
   width: 100px;
   height: 40px;
}
.l-button_button:hover{
    opacity: 0.8;
}
.l-button_button:active{
   opacity: 1;
}
</style>>