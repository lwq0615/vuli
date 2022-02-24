<template>
    <div class="vu-select_container">
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
            this.$emit('clear')
            if(this.disable){
                return
            }
            this.checkOption(null)
        }
    }
}
</script>

<style lang="scss" scoped>
.vu-select_container {
    display: inline-block;
    position: relative;
    width: 200px;
    height: 40px;
    .show-text {
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        text-align: left;
        height: 100%;
        outline: none;
        padding: 0 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        flex: 1;
        width: 100%;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis; 
        white-space: nowrap;
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
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: #dddddd;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #606266;
        cursor: pointer;
        user-select: none;
        font-family: Avenir, Helvetica, Arial, sans-serif;
    }
}
</style>>