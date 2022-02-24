<template>
    <div :class="`vu-image-item_container ${loading}`" @click="$emit('click',src)">
        <img :src="load ? src : ''" :style="imgStyle" @load="loadEnd" ref="img">
    </div>
</template>

<script>
export default {
    name: 'vu-image-item',
    props: {
        src: String,
        lazy: Boolean
    },
    data(){
        return {
            load: false,
            loading: ""
        }
    },
    computed: {
        imgStyle(){
            return `object-fit: ${this.$parent.cutType};`
        }
    },
    mounted(){
        if(this.$parent.$options._componentTag === 'vu-image'){
            this.$parent.createImg(this)
        }
    },
    destroyed(){
        if(this.$parent.$options._componentTag === 'vu-image'){
            this.$parent.destroyeImg(this)
        }
    },
    methods: {
        loadStart(){
            if(!this.load){
                this.load = true
                this.loading = "loading"
            }
        },
        loadEnd(){
            this.$emit("load",this.src)
            this.loading = ""
            if(this.$parent.type === 'fall'){
                this.$refs.img.style.height = "auto"
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.fall .vu-image-item_container {
    width: 100%;
    border-radius: 3px;
    overflow: hidden;
    img {
        width: 100%;
        height: 100px;
        object-fit: cover;
        cursor: pointer;
    }
}

.grid .vu-image-item_container {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }
}

.loading{
    position: relative;
}
.loading::before{
    content: "";
    display: block;
    background-color: #DCDFE6;
    position: absolute;
    opacity: 0.5;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    z-index: 2;
}
.loading::after{
    position: absolute;
    content: "";
    display: block;
    transform: translate(-50%,-50%);
    background-image: url(/vui/loading.png);
    background-size: cover;
    width: 20%;
    height: 20%;
    left: 50%;
    top: 50%;
    z-index: 3;
    animation: rotate 2s infinite linear;
}

@keyframes rotate {
    0%{
        transform: translate(-50%,-50%);
    }
    100%{
        transform: translate(-50%,-50%) rotateZ(360deg);
    }
}
</style>