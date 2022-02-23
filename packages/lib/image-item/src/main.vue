<template>
    <div :class="`l-image-item_container ${loading}`" @click="$emit('click',src)">
        <img :src="load ? src : ''" :style="imgStyle" @load="loadEnd" ref="img">
    </div>
</template>

<script>
export default {
    name: 'l-image-item',
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
        if(this.$parent.$options._componentTag === 'l-image'){
            this.$parent.createImg(this)
        }
    },
    destroyed(){
        if(this.$parent.$options._componentTag === 'l-image'){
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