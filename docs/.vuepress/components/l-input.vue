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

<style lang="scss" scoped>
.l-input_container{
    display: inline-block;
    position: relative;

    input{
        width: 100%;
        height: 100%;
        outline: none;
        border: 1px solid #e4e7ed;
        border-radius: 3px;
        transition: all ease 0.3s;
        color: #606266;
        padding: 0 8px;
        box-sizing: border-box;
    }
    input:focus{
        border: 1px solid #E44258;
    }
    .disable{
        background-color: #F5F7FA;
        cursor: no-drop;
    }
    .disable:focus{
        border: 1px solid #e4e7ed;
    }

    textarea{
        outline: none;
        border: 1px solid #e4e7ed;
        border-radius: 3px;
        transition: color ease 0.3s, border ease 0.3s;
        color: #606266;
        padding: 8px;
    }
    textarea::-webkit-scrollbar{
        display: none;
    }
    textarea:focus{
        border: 1px solid #E44258;
    }

    .clear{
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        height: 12px;
        width: 12px;
        border-radius: 50%;
        border: 1px solid #dddddd;
        color: #DCDFE6;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }

    .search{
        position: absolute;
        right: 1px;
        top: 1px;
        bottom: 1px;
        border-radius: 0 3px 3px 0;
        border: none;
        border-left: 1px solid #e4e7ed;
        color: #E44258;
        padding: 0 10px;
        font-size: 13px;
        display: flex;
        background-color: #f5f7fa;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        user-select: none;
    }
}
</style>