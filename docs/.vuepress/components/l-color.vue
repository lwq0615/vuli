<template>
    <div class="l-color_container">
        <div class="color-block" :style="colorStyle" @click="checkColor"></div>
        <input type="color" v-model="activeValue" ref="input" :name="name">
    </div>
</template>


<script>
export default {
    name: 'l-color',
    props: {
        value: {
            type: String,
            default: '#E44258'
        },
        name: String
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    data(){
        return {
            activeValue: '#fff'
        }
    },
    watch: {
        value(newVal){
            if(newVal !== this.activeValue){
                this.activeValue = newVal
            }
        },
        activeValue(newVal){
            if(newVal !== this.value){
                this.$emit('change',newVal)
            }
        }
    },
    computed:{
        colorStyle(){
            return `background-color: ${this.activeValue};`
        }
    },
    created(){
        this.activeValue = this.value
    },
    methods: {
        checkColor(){
            this.$emit('click',this.activeValue)
            this.$refs.input.click()
        }
    }
}
</script>

<style lang="scss" scoped>
.l-color_container{
    display: inline-block;
    height: 20px;
    width: 20px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    input{
        height: 0;
        width: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        border: none;
        z-index: -1;
    }
    .color-block{
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        border-radius: 3px;
        border: 1px solid #e4e7ed;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        transform: rotateZ(90deg);
        font-family: serif;
        user-select: none;
    }
}
</style>