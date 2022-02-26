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