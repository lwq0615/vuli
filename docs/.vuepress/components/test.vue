<template>
    <img :src="src">
</template>

<script>
export default {
    name: 'test',
    props: {
        src:{
            type: String,
            default: ""
        }
    }
}
</script>