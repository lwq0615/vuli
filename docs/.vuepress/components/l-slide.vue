<template>
    <div class="l-slide_container">
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
                let newImg = {
                    index: that.index2,
                    src: that.imgs[that.index2]
                }
                if(!events || !events.includes("next")){
                    that.$emit("next",newImg)
                }
                that.$emit("change",newImg)
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
                let newImg = {
                    index: that.index2,
                    src: that.imgs[that.index2]
                }
                that.$emit("last",newImg)
                that.$emit("change",newImg)
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

.l-slide_container {
    overflow: hidden;
    position: relative;
    display: inline-block;
    width: 400px;
    height: 250px;
    .showBox{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
    }
    .imgBox {
        width: 300%;
        height: 100%;
        display: flex;
        transform: translateX(-33.33%);
        .img {
            width: 33.3%;
            flex-grow: 1;
            height: 100%;
        }
    }
    .icon{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        background-color: rgba($color: #ffffff, $alpha: 0.8);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: #E44258;
        cursor: pointer;
        z-index: 3;
        user-select: none;
    }
}
</style>>