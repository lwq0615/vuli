<template>
    <div class="l-radio_container">
        <div class="fiex" @click="check">
            <div class="input" :style="inputStyle+inputActiveStyle"></div>
            <div class="text" :style="fontSizeStyle+textActiveStyle"><slot></slot></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'lRadio',
    props: {
        value: {
            type: [String,Number],
            default: null
        },
        disable: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        textActiveStyle(){
            if(this.$parent.$options._componentTag === 'l-radio-group'){
                let style = ''
                if(this.$parent.activeValue === this.value){
                    if(this.disable){
                        style += `color: #c0c4cc;`
                    }else{
                        style += `color: #E44258;`
                    }
                }else{
                    if(this.disable){
                        style += `color: #c0c4cc;`
                    }else{
                        style += `color: #606266;`
                    }
                }
                return style
            }else{
                return null
            }
        },
        fontSizeStyle(){
            if(this.$parent.$options._componentTag === 'l-radio-group'){
                return `font-size:${this.$parent.fontSize};`
            }else{
                return null
            }
        },
        inputStyle(){
            if(this.$parent.$options._componentTag === 'l-radio-group'){
                let style = ''
                style += `width:${this.$parent.iconSize}px;`
                style += `height:${this.$parent.iconSize}px;`
                if(this.disable){
                    style += `background-color: #f5f7fa;`
                }
                return style
            }else{
                return null
            }
        },
        inputActiveStyle(){
            if(this.$parent.$options._componentTag === 'l-radio-group'){
                let style = ''
                if(this.$parent.activeValue === this.value){
                    if(this.disable){
                        style += `background-color: #c0c4cc;`
                        style += `border: ${this.$parent.iconSize/2.66}px solid #f5f7fa;`
                    }else{
                        style += `border: ${this.$parent.iconSize/2.66}px solid #E44258;`
                    }
                }
                return style
            }else{
                return null
            }
        }
    },
    created(){
        if(this.$parent.$options._componentTag === 'l-radio-group'){
            this.$parent.createRadio(this)
        }
    },
    destroyed(){
        if(this.$parent.$options._componentTag === 'l-radio-group'){
            this.$parent.delRadio(this)
        }
    },
    methods: {
        check(){
            if(this.disable){
                return
            }
            this.$parent.radioClick(this.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.l-radio_container{
    display: inline-block;
    cursor: pointer;
    .fiex{
        display: flex;
        align-items: center;
        .input{
            border-radius: 50%;
            background-color: white;
            margin-right: 5px;
            border: 1px solid #e4e7ed;
            box-sizing: border-box;
            transition: all ease 0.3s;
        }
        .text{
            color: #606266;
            transition: all ease 0.3s;
        }
    }
}
</style>>