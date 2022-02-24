<template>
    <div class="vu-switch_container" @click="$emit('click',$event)">
        <div class="switch" @click="change()" :style="colorStyle">
            <div class="span" :style="flexStyle"></div>
            <div class="icon"></div>
        </div>
        <input 
        type="text" 
        style="display: none;" 
        v-model="activeValue" 
        :name="name">
    </div>
</template>


<script>
export default {
    name: 'vu-switch',
    props: {
        openColor: {
            type: String,
            default: '#E44258'
        },
        closeColor: {
            type: String,
            default: '#DCDFE6'
        },
        value: {
            type: [Number,String,Boolean],
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        openValue: {
            type: [Number,String,Boolean],
            default: true
        },
        closeValue: {
            type: [Number,String,Boolean],
            default: false
        },
        name: String
    },
    model: {
        prop: 'value',
        event: 'model'
    },
    data(){
        return {
            open: false
        }
    },
    watch: {
        value(newVal,oldVal){
            let param = null
            if(newVal === this.openValue){
                param = 'open'
            }
            else if(newVal === this.closeValue){
                param = 'close'
            }
            else{
                param = Boolean(newVal) ? "open" : "close"
            }
            if(this.change(param) === 'disable'){
                this.$emit('model',oldVal)
            }
        }
    },
    computed: {
        flexStyle(){
            return `flex:${this.open ? '1' : '0'};`
        },
        colorStyle(){
            let style = `background-color:${this.open ? this.openColor : this.closeColor};`
            if(this.disabled){
                style += 'opacity: 0.5;'
            }
            return style
        },
        activeValue(){
            if(this.open){
                return this.openValue !== undefined ? this.openValue : true
            }else{
                return this.closeValue !== undefined ? this.closeValue : false
            }
        }
    },
    created(){
        this.open = Boolean(this.value)
    },
    methods: {
        change(value){
            if(this.disabled){
                return 'disable'
            }
            let newValue = null
            if(value){
                newValue = value === 'open'
                if(newValue === this.open){
                    return
                }
            }else{
                newValue = !this.open
            }
            this.open = newValue
            this.$emit('change',this.activeValue)
            this.$emit('model',this.activeValue)
            return this.open
        }
    }
}
</script>