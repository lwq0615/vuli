<template>
    <button 
    :class="`vu-button_button size-${size} color-${color}`"
    @click="$emit('click',$event)"
    ><slot></slot></button>
</template>

<script>
export default {
    name: 'vu-button',
    props:{
         color: {
            type: String,
            default: 'default'
         },
         size: {
            type: String,
            default: 'default'
         }
    }
}
</script>

<style lang="scss" scoped>
.vu-button_button{
   border-radius: 4px;
   border: 1px solid #e4e7ed;
   cursor: pointer;
   font-size: 14px;
   padding: 10px 20px;
   color: white;
   transition: all linear 0.1s;
}
.vu-button_button.size-default{
   font-size: 14px;
   padding: 10px 20px;
   color: white;
}
.vu-button_button.size-small{
   font-size: 13px;
   padding: 7px 14px;
   color: white;
}
.vu-button_button.size-big{
   font-size: 18px;
   padding: 12px 28px;
   color: white;
}


.vu-button_button.color-default{
   background-color: white;
   color: black;
}
.vu-button_button.color-default:hover{
   background-color: rgba($color: #E44258, $alpha: 0.1);
   color: #E44258;
}


.vu-button_button.color-primary{
   background-color: #409EFF;
}

.vu-button_button.color-success{
   background-color: #67C23A;
}

.vu-button_button.color-info{
   background-color: #909399;
}
.vu-button_button.color-warning{
   background-color: #E6A23C;
}

.vu-button_button.color-error{
   background-color: #E44258;
}


.vu-button_button:hover{
   opacity: 0.8;
}
.vu-button_button:active{
   opacity: 1;
}
</style>>