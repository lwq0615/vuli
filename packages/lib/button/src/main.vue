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