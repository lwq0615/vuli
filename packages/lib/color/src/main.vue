<template>
    <div class="vu-color_container">
        <div class="color-block" :style="colorStyle" @click="checkColor">></div>
        <input type="color" v-model="activeValue" ref="input" :name="name">
    </div>
</template>


<script>
export default {
    name: 'vu-color',
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