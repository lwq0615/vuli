<template>
    <div :class="`l-image_container ${noScroll ? 'noScroll' : ''}`" ref="container" @scroll="loadImg">
        <div :class="type" :style="scrollStyle" ref="scroll">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'l-image',
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
            imgs: [],
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
        this.loadImg()
    },
    methods: {
        getTop(e) {
            let dom = this.$refs.container
            var T = e.offsetTop;
            while((e = e.offsetParent) && e !== dom) {
                T += e.offsetTop;
            }
            return T;
        },
        loadImg(){
            let dom = this.$refs.container
            if(!this.o){
                this.o = setTimeout(() => {
                    var H = dom.clientHeight
                    var S = dom.scrollTop;
                    if(H+S >= this.$refs.scroll.clientHeight){
                        this.$emit('scrollEnd')
                    }
                    for (var i = 0; i < this.imgs.length; i++) {
                        if ((H+S > this.getTop(this.imgs[i].$el) || !this.imgs[i].lazy) && !this.imgs[i].load) {
                            this.imgs[i].loadStart()
                        }
                    }
                    this.o = null
                },100)
            }
        },
        createImg(img){
            this.imgs.push(img)
        },
        destroyeImg(img){
            this.imgs.splice(this.imgs.indexOf(img),1)
        }
    }
}
</script>

<style lang="scss" scoped>
.l-image_container {
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
.l-image_container::-webkit-scrollbar {
    background-color: #DCDFE6;
    width: 10px;
}
.l-image_container::-webkit-scrollbar-thumb {
    background-color: rgba($color: #e44258, $alpha: 0.8);
}
.l-image_container.noScroll::-webkit-scrollbar {
    display: none;
}
</style>