<template>
    <transition name="fade">
        <section class="l-image-light_container" @click="show = false" v-show="show">
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