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

<style lang="scss" scoped>
.l-button_button{
   border-radius: 6px;
   border: 1px solid #e4e7ed;
   cursor: pointer;
   font-size: 14px;
   padding: 10px 20px;
   color: white;
}
.l-button_button.default{
   font-size: 14px;
   padding: 10px 20px;
   color: white;
}
.l-button_button.small{
   font-size: 13px;
   padding: 7px 14px;
   color: white;
}
.l-button_button.big{
   font-size: 18px;
   padding: 12px 28px;
   color: white;
}


.l-button_button:hover{
   opacity: 0.8;
}
.l-button_button:active{
   opacity: 1;
}
</style>>