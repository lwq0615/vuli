<template>
    <div :class="`vu-image_container ${noScroll ? 'noScroll' : ''}`" ref="container" @scroll="scroll">
        <div :class="type" :style="scrollStyle" ref="scroll">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vu-image',
    props: {
        columns: {
            type: Number,
            default: 4
        },
        gap: {
            type: String,
            default: '5px'
        },
        cutType: {
            type: String,
            default: 'cover'
        },
        type: {
            type: String,
            default: 'grid'
        },
        noScroll: Boolean
    },
    data(){
        return {
            o: null
        }
    },
    computed: {
        scrollStyle(){
            let style = ''
            style += `column-count: ${this.columns};`
            style += `column-gap: ${this.gap};`
            return style
        }
    },
    mounted(){
        this.scroll()
    },
    methods: {
        scroll(){
            let dom = this.$refs.container
            if(!this.o){
                this.o = setTimeout(() => {
                    var H = dom.clientHeight
                    var S = dom.scrollTop;
                    if(H+S >= this.$refs.scroll.clientHeight){
                        this.$emit('scrollEnd')
                    }
                    this.o = null
                },100)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.vu-image_container {
    display: inline-block;
    width: 600px;
    height: 400px;
    overflow: auto;
    position: relative;
    .fall {
        width: 100%;
        column-count: 4;
        column-gap: 5px;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 5px;
    }
}
.vu-image_container::-webkit-scrollbar {
    background-color: #DCDFE6;
    width: 10px;
}
.vu-image_container::-webkit-scrollbar-thumb {
    background-color: rgba($color: #e44258, $alpha: 0.8);
}
.vu-image_container.noScroll::-webkit-scrollbar {
    display: none;
}
</style>