<template>
    <div class="l-col_container" :style="spanStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'l-col',
    props: {
        span: {
            type: Number,
            default: 6
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    computed: {
        spanStyle(){
            return `grid-column: auto / span ${this.span+this.offset};
            width:${this.span/(this.span+this.offset)*100}%;`
        }
    }
}
</script>