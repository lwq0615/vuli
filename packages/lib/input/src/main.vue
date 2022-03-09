<template>
    <div class="vu-input_container" :style="whStyle">
        <input 
        v-if="type !== 'textarea'"
        :class="disableClass" 
        :style="paddingStyle"
        :type="type" 
        :readonly="disable || readonly" 
        :placeholder="placeholder" 
        :value="value"
        :maxlength="maxlength"
        :minlength="minlength"
        :name="name"
        :required="required"
        @invalid="$emit('invalid',$event)"
        @blur="$emit('blur',$event)"
        @focus="$emit('focus',$event)"
        @click="$emit('click',$event)"
        @change="$emit('change',$event)"
        @input="changeValue">

        <textarea 
        v-else
        :class="disableClass" 
        :style="textareaStyle"
        :readonly="disable || readonly" 
        :required="required"
        :placeholder="placeholder" 
        :value="value"
        :maxlength="maxlength"
        :minlength="minlength"
        :cols="cols" 
        :name="name"
        :rows="rows"
        @invalid="$emit('invalid',$event)"
        @blur="$emit('blur',$event)"
        @focus="$emit('focus',$event)"
        @click="$emit('click',$event)"
        @change="$emit('change',$event)"
        @input="changeValue"></textarea>

        <div class="clear" @click="clearValue" v-show="clearable && !search && type !== 'search'">×</div>
        <div class="search" @click="searchValue" v-show="search && type !== 'textarea'">{{search}}</div>
    </div>
</template>

<script>
export default {
    name: 'vu-input',
    props: {
        value: {
            type: [String,Number],
            default: '',
            required: true
        },
        disable: {
            type: Boolean,
            default: false
        },
        readonly: {
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
        name: String,
        required: {
            type: Boolean,
            default: false
        }
    },
    model: {
        prop: 'value',
        event: 'model'
    },
    computed: {
        disableClass(){
            return this.disable ? 'disable' : ''
        },
        whStyle(){
            if(this.type === 'textarea'){
                return ''
            }else{
                return 'width:200px;height:40px;'
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
        value(newVal,oldVal){
            if(newVal !== oldVal){
                if(this.maxlength && newVal.length > this.maxlength){
                    this.$emit('model',newVal.substring(0,this.maxlength))
                }
            }
        }
    },
    methods: {
        clearValue(){
            if(this.disable || this.readonly){
                return
            }
            this.$emit('model',"")
            this.$emit('clear')
        },
        searchValue(){
            this.$emit('search',this.value)
        },
        changeValue(e){
            this.$emit('input',e)
            this.$emit('model',e.target.value)
        }
    }
}
</script>