<template>
    <section :class="`vu-scroll_container ${noScroll ? 'noScroll' : ''}`" @scroll="scroll">
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'vu-scroll',
    props: {
        noScroll: Boolean
    },
    data(){
        return {
            o: null
        }
    },
    methods: {
        scroll(e){
            if(this.o !== null){
                clearTimeout(this.o)
            }
            this.o = setTimeout(() => {
                const height = e.target.scrollTop + e.target.clientHeight
                if(Math.abs(height-e.target.scrollHeight) < 1){
                    this.$emit('scrollEnd')
                }else if(e.target.scrollTop === 0){
                    this.$emit('scrollStart')
                }
                this.o = null
            },200)
        }
    }
}
</script>

<style lang="scss" scoped>
.vu-scroll_container{
    display: inline-block;
    width: 500px;
    height: 400px;
    overflow: auto;
}
.vu-scroll_container::-webkit-scrollbar {
    background-color: transparent;
    border-radius: 100px;
    width: 6px;
}
.vu-scroll_container::-webkit-scrollbar-thumb {
    background-color: rgba($color: #e44258, $alpha: 0.8);
    border-radius: 100px;
}
.vu-scroll_container.noScroll::-webkit-scrollbar {
    display: none;
}
</style>