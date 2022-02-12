<template>
    <div class="l-input_container" :style="whStyle">
        <input 
        v-if="type !== 'textarea'"
        :class="disableClass" 
        :style="paddingStyle"
        :type="type" 
        :readonly="disable" 
        :placeholder="placeholder" 
        v-model="activeValue"
        :maxlength="maxlength"
        :minlength="minlength"
        :name="name"
        @blur="blur"
        @focus="focus"
        @click="click"
        @input="input"
        @change="change">

        <textarea 
        v-else
        :class="disableClass" 
        :style="textareaStyle"
        :readonly="disable" 
        :placeholder="placeholder" 
        v-model="activeValue"
        :maxlength="maxlength"
        :minlength="minlength"
        :cols="cols" 
        :name="name"
        :rows="rows"
        @blur="blur"
        @focus="focus"
        @click="click"
        @input="input"></textarea>

        <div class="clear" @click="clearValue" v-show="clearable && !search && type !== 'search'">×</div>
        <div class="search" @click="searchValue" v-show="search && type !== 'textarea'">{{search}}</div>
    </div>
</template>

<script>
export default {
    name: 'l-input',
    props: {
        value: {
            type: [String,Number],
            default: ''
        },
        disable: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: '请输入'
        },
        maxlength: {
            type: Number
        },
        minlength: {
            type: Number
        },
        type: {
            type: String,
            default: 'text'
        },
        rows: {
            type: [String,Number]
        },
        cols: {
            type: [String,Number]
        },
        clearable: {
            type: Boolean,
            default: false
        },
        search: {
            type: String,
            default: ''
        },
        name: String
    },
    model: {
        prop: 'value',
        event: 'model'
    },
    data(){
        return {
            activeValue: null
        }
    },
    computed: {
        disableClass(){
            return this.disable ? 'disable' : ''
        },
        whStyle(){
            if(this.type === 'textarea'){
                return ''
            }else{
                return 'width:200px;height:35px;'
            }
        },
        textareaStyle(){
            let style = ''
            if(this.cols === undefined){
                style += 'height:60px;'
            }
            if(this.rows === undefined){
                style += 'width:200px;'
            }
            return style
        },
        paddingStyle(){
            if(this.type === 'search'){
                return ''
            }else if(this.search){
                return 'padding-right: 50px'
            }else if(this.clearable){
                return 'padding-right: 25px'
            }
        }
    },
    watch: {
        activeValue(newVal,oldVal){
            if(newVal !== oldVal){
                this.$emit('model',newVal)
            }
        },
        value(newVal){
            if(newVal !== this.activeValue){
                if(this.maxlength && newVal.length > this.maxlength){
                    this.activeValue = newVal.substring(0,this.maxlength)
                }else{
                    this.activeValue = newVal
                }
            }
        }
    },
    methods: {
        blur(event){
            this.$emit('blur',event)
        },
        focus(event){
            this.$emit('focus',event)
        },
        click(event){
            this.$emit('click',event)
        },
        input(event){
            this.$emit('input',event)
        },
        change(event){
            this.$emit('change',event)
        },
        clearValue(){
            this.activeValue = null
            this.$emit('clear')
        },
        searchValue(){
            this.$emit('search',this.activeValue)
        }
    }
}
</script>