<template>
    <div class="vu-select_container">
        <input 
            class="show-text"
            :placeholder="tempLabel || placeholder"
            @click="selectClick(true)"
            @blur="selectClick(false)"
            v-model="form.label"
            :style="disableStyle+cursorStyle"
            :readonly="!search || disable || readonly"
            ref="showText"
        >
        <div class="options" :style="heightStyle">
            <slot></slot>
        </div>
        <div class="delete-btn" @click="deleteCheck" v-if="deleteBtn" :style="cursorStyle">×</div>
        <div :class="`arrow-btn ${showOptions ? 'active' : ''}`" :style="cursorStyle">></div>
        <input 
        type="text" 
        style="display: none;" 
        v-model="form.value" 
        :name="name" 
        :required="required" 
        @invalid="$emit('invalid',$event)">
    </div>
</template>

<script>
export default {
    name: 'vu-select',
    props:{
        value: {
            type: [String,Number],
            default: null
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        deleteBtn: {
            type: Boolean,
            default: false
        },
        search: {
            type: Boolean,
            default: true
        },
        disable: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        name: String,
        required: {
            type: Boolean,
            default: false
        }
    },
    model:{
        prop: 'value',
        event: 'model'
    },
    data(){
        return {
            options: [],
            form: {
                label: null,
                value: null
            },
            showOptions: false,
            tempLabel: null
        }
    },
    computed: {
        disableStyle(){
            return `background-color:${this.disable ? '#F5F7FA' : '#fff'};`
        },
        cursorStyle(){
            return `cursor:${this.disable ? 'no-drop' : 'pointer'};`
        },
        heightStyle(){
            if(!this.showOptions){
                return `height: 0;`
            }
            if(this.search){
                let len = 0
                for(let item of this.options){
                    if(item.label.includes(this.form.label || '')){
                        len ++
                    }
                }
                return `height: ${len*34 > 5*34 ? 5*34 : len*34}px;`
            }
            return `height: ${this.options.length*34 > 5*34 ? 5*34 : this.options.length*34}px;`
        }
    },
    watch:{
        value:{
            handler(newVal){
                if(newVal === null || newVal === undefined){
                    this.checkOption(null)
                    return
                }
                for(let item of this.options){
                    if(item.value === newVal && newVal !== this.form.value){
                        this.checkOption(item)
                    }
                }
            }
        },
        showOptions(newVal){
            newVal ? this.$emit('open') : this.$emit('close')
        }
    },
    created(){
        for(let item of this.options){
            if(item.value === this.value){
                this.form = {...item}
            }
        }
    },
    methods:{
        /**
         * 点击select
         */
        selectClick(open){
            open ? this.$emit('click') : null
            if(this.disable || this.readonly){
                return
            }
            if(open){
                this.showOptions = true
                if(this.search){
                    this.form.label = ''
                }
            }else{
                this.showOptions = false
                if(this.search){
                    this.form.label = this.tempLabel
                }
            }
        },
        checkOption(option){
            if(option){
                if(option.value !== this.form.value){
                    this.$emit('change',option.value)
                    this.form = {...option}
                    this.tempLabel = option.label
                    this.$emit('model',option.value)
                }
            }else{
                if(this.form.value !== null){
                    this.$emit('change',null)
                }
                this.form = {
                    label: null,
                    value: null
                }
                this.tempLabel = ''
                this.$emit('model',null)
            }
            this.showOptions = false
        },
        deleteCheck(){
            if(this.disable || this.readonly){
                return
            }
            this.$emit('clear')
            this.checkOption(null)
        }
    }
}
</script>