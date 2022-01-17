<template>
    <div class="l-slide_container" :style="`width:${width};height:${height}`">
        <div class="imgBox" :style="style">
            <img class="img" :style="`object-fit:${cutType}`" :src="imgs[index-1] || imgs[imgs.length-1]">
            <img class="img" :style="`object-fit:${cutType}`" :src="imgs[index]">
            <img class="img" :style="`object-fit:${cutType}`" :src="imgs[index+1] || imgs[0]">
        </div>
        <img class="showBox" :src="imgs[index2]" :style="`object-fit:${cutType}`" v-show="!o" @click="imgClick()">
        <div class="icon" style="left:10px" @click="last()" v-show="showBtn">&lt;</div>
        <div class="icon" style="right:10px" @click="next()" v-show="showBtn">&gt;</div>
    </div>
</template>

<script>
export default {
    name: 'l-slide',
    props:{
        imgs: Array,
        width: {
            type: String,
            default: '400px'
        },
        height: {
            type: String,
            default: '250px'
        },
        cutType: {
            type: String,
            default: 'cover'
        },
        time: {
            type: String,
            default: '1s'
        },
        auto: {
            type: Number,
            default: 0
        },
        showBtn: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            index: 0,
            o: null,
            style: '',
            index2: 0
        }
    },
    mounted(){
        let that = this
        if(this.auto){
            setInterval(function(){
                that.next(['next'])
            },that.auto)
        }
    },
    methods:{
        next(events){
            let that = this
            this.index2 = that.index+1 == that.imgs.length ? 0 : that.index+1
            if(!that.o){
                let oldImg = {
                    index: that.index,
                    src: that.imgs[that.index]
                }
                let newImg = {
                    index: that.index2,
                    src: that.imgs[that.index2]
                }
                if(!events || !events.includes("next")){
                    that.$emit("next",{oldImg,newImg})
                }
                that.$emit("change",{oldImg,newImg})
                that.style = `transition:all ${that.time} ease;transform:translateX(-66.66%);`
                that.o = setTimeout(function(){
                    that.index+1 == that.imgs.length ? that.index = 0 : that.index++
                    that.o = null
                    that.style = 'transform:translateX(-33.33%);'
                },1000)
            }
        },
        last(){
            let that = this
            this.index2 = that.index-1 < 0 ? that.imgs.length-1 : that.index-1
            if(!that.o){
                let oldImg = {
                    index: that.index,
                    src: that.imgs[that.index]
                }
                let newImg = {
                    index: that.index2,
                    src: that.imgs[that.index2]
                }
                that.$emit("last",{oldImg,newImg})
                that.$emit("change",{oldImg,newImg})
                that.style = `transition:all ${that.time} ease;transform:translateX(0%);`
                that.o = setTimeout(function(){
                    that.index-1 < 0 ? that.index = that.imgs.length-1 : that.index--
                    that.o = null
                    that.style = 'transform:translateX(-33.33%);'
                },1000)
            }
        },
        imgClick(){
            let info = {
                index: this.index2,
                src: this.imgs[this.index2]
            }
            this.$emit("imgClick",info)
        }
    }
}
</script>


<style lang="scss" scoped>
@import './slide.scss';
</style>>