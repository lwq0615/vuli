<template>
    <div class="vu-row_container" :style="gapStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vu-row',
    props: {
        colGap: String,
        rowGap: String
    },
    computed: {
        gapStyle(){
            return `grid-column-gap: ${this.colGap};grid-row-gap: ${this.rowGap};`
        }
    }
}
</script>

<style lang="scss" scoped>
.vu-row_container{
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    justify-items: right;
    margin: 5px 0;
    grid-auto-rows: 0;
    grid-template-rows: auto;
    grid-auto-rows: auto; 
}
</style>