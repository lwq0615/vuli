<template>
    <div class="vu-color_container">
        <div class="color-block" :style="colorStyle" @click="checkColor">></div>
        <input type="color" :value="value" ref="input" :name="name" @change="change">
    </div>
</template>


<script>
export default {
    name: 'vu-color',
    props: {
        value: {
            type: String,
            required: true
        },
        name: String
    },
    model: {
        prop: 'value',
        event: 'model'
    },
    watch: {
        value(newVal,oldVal){
            if(newVal !== oldVal){
                this.$emit('change',newVal)
            }
        }
    },
    computed:{
        colorStyle(){
            return `background-color: ${this.value};`
        }
    },
    methods: {
        checkColor(){
            this.$emit('click',this.value)
            this.$refs.input.click()
        },
        change(e){
            this.$emit('model',e.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.vu-color_container{
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