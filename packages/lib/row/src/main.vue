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