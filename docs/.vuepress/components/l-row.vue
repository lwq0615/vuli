<template>
    <div class="l-row_container" :style="gapStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'l-row',
    props: {
        gap: String
    },
    computed: {
        gapStyle(){
            return `grid-column-gap: ${this.gap};`
        }
    }
}
</script>

<style lang="scss" scoped>
.l-row_container{
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    justify-items: right;
    margin: 5px 0;
    grid-auto-rows: 0;
    grid-template-rows: auto;
    overflow: hidden;
}
</style>