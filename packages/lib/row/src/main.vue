<template>
    <div class="vu-row_container" :style="gapStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'vu-row',
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