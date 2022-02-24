<template>
    <transition name="fade">
        <section class="vu-image-light_container" @click="show = false" v-show="show">
            <div class="imgBox">
                <img :src="url">
            </div>
        </section>
    </transition>
</template>

<script>
export default {
    data(){
        return {
            show: false,
            url: ''
        }
    },
    methods: {
        showImage(url){
            this.url = url
            this.show = true
        }
    }
}
</script>


<style lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

.vu-image-light_container{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba($color: #000000, $alpha: 0.3);
    z-index: 99;
    cursor: pointer;
    .imgBox{
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
}
</style>