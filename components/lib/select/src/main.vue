<template>
    <div class="l-select_container" :style="`width:${width}`">
        <input 
            class="show-text"
            :placeholder="tempLabel || '请选择'"
            @click="selectClick(true)"
            @blur="selectClick(false)"
            v-model="form.label"
            :style="disableStyle+cursorStyle"
            :readonly="!openSearch || disable"
        >
        <div class="options" :style="heightStyle">
            <slot></slot>
        </div>
        <div class="delete-btn" @click="deleteCheck" v-show="deleteBtn" :style="cursorStyle">×</div>
        <input type="text" style="display: none;" v-model="form.value" :name="name">
    </div>
</template>

<script>
export default {
    name: 'lSelect',
    props:{
        value: {
            type: [String,Number],
            default: null
        },
        width: {
            type: String,
            default: '200px'
        },
        deleteBtn: {
            type: Boolean,
            default: true
        },
        openSearch: {
            type: Boolean,
            default: true
        },
        disable: {
            type: Boolean,
            default: false
        },
        name: String
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
            if(this.openSearch){
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
                for(let item of this.options){
                    if(item.value === newVal && newVal !== this.form.value){
                        this.checkOption(item)
                    }
                }
            }
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
            if(this.disable){
                return
            }
            if(open){
                this.showOptions = true
                if(this.openSearch){
                    this.form.label = ''
                }
            }else{
                this.showOptions = false
                if(this.openSearch){
                    this.form.label = this.tempLabel
                }
            }
        },
        checkOption(option){
            if(option){
                if(option.value !== this.form.value){
                    this.$emit('change',{newVal:option.value,oldVal:this.form.value})
                    this.form = {...option}
                    this.tempLabel = option.label
                    this.$emit('model',option.value)
                }
            }else{
                if(this.form.value !== null){
                    this.$emit('change',{newVal:null,oldVal:this.form.value})
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
            if(this.disable){
                return
            }
            this.checkOption(null)
        }
    }
}
</script>