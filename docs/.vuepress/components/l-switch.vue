<template>
    <div class="l-switch_container">
        <div class="switch" @click="change()" :style="colorStyle">
            <div class="span" :style="flexStyle"></div>
            <div class="icon"></div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'l-switch',
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
        }
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
            if(this.open){
                this.$emit('change',this.openValue !== undefined ? this.openValue : true)
                this.$emit('model',this.openValue !== undefined ? this.openValue : true)
            }else{
                this.$emit('change',this.closeValue !== undefined ? this.closeValue : false)
                this.$emit('model',this.closeValue !== undefined ? this.closeValue : false)
            }
            return this.open
        }
    }
}
</script>


<style lang="scss" scoped>
.l-switch_container{
    width: 40px;
    height: 20px;
    display: inline-block;
    .switch{
        width: 100%;
        height: 100%;
        cursor: pointer;
        border-radius: 100px;
        display: flex;
        transition: all ease 0.3s;
        align-items: center;
        .span{
            flex: 1;
            transition: all ease 0.3s;
        }
        .icon{
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background-color: white;
            margin: 2px;
            transition: all ease 0.3s;
        }
    }
}
</style>>