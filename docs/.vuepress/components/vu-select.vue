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

<style lang="scss" scoped>
.vu-select_container {
    display: inline-block;
    position: relative;
    height: 40px;
    width: 200px;
    .show-text {
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: 16px;
        text-align: left;
        height: 100%;
        outline: none;
        padding: 0 15px;
        transition: all ease 0.2s;
        flex: 1;
        width: 100%;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis; 
        white-space: nowrap;
    }
    .show-text:focus{
        border: 1px solid #E44258;
    }
    
    .options {
        overflow-y: auto;
        overflow-x: hidden;
        width: 100%;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
        margin: 5px 0;
        max-height: 170px;
        position: absolute;
        z-index: 2;
        left: 0;
        top: 100%;
        height: 50px;
        transition: all ease 0.3s;

        .options-list {
            line-height: 34px;
            text-align: left;
            padding-left: 15px;
            width: 100%;
            overflow: hidden;
            color: #606266;
            text-overflow: ellipsis;
            white-space: nowrap;
            cursor: pointer;
        }
        .options-list.active{
            background-color: #E44258 !important;
            color: white !important;
        }
        .options-list:hover {
            background-color: #F5F7FA;
        }
    }
    .options::-webkit-scrollbar {
        width: 6px;
    }
    .options::-webkit-scrollbar-thumb {
        background-color: rgba($color: #E44258, $alpha: 0.8);
        -webkit-border-radius: 100px;
        -moz-border-radius: 100px;
        border-radius: 100px;
    }

    .delete-btn {
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%) scale(0.8);
        height: 16px;
        width: 16px;
        border-radius: 50%;
        border: 1px solid #dddddd;
        color: #DCDFE6;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-family: fangsong;
        font-weight: 600;
        font-size: 13px;
    }

    .arrow-btn {
        position: absolute;
        right: 10px;
        top: 50%;
        height: 15px;
        width: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: translateY(-50%) rotateZ(90deg);
        color: #dcdfe6;
        cursor: pointer;
        user-select: none;
        font-family: fangsong;
        font-weight: 600;
        font-size: 14px;
        transition: all ease 0.2s;
        pointer-events: none;
    }
    .arrow-btn.active{
        transform: translateY(-50%) rotateZ(270deg);
    }
}
</style>>