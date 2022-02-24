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