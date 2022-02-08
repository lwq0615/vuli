<template>
    <div class="l-checkbox_container">
        <div class="flex" @click="check">
            <div class="input" :style="inputStyle+inputActiveStyle">{{$parent.activeValue.includes(value) ? '√' : ''}}</div>
            <div class="text" :style="fontSizeStyle+textActiveStyle"><slot></slot></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'lCheckbox',
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
            if(this.$parent.$options._componentTag === 'l-checkbox-group'){
                let style = ''
                if(this.$parent.activeValue.includes(this.value)){
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
            if(this.$parent.$options._componentTag === 'l-checkbox-group'){
                return `font-size:${this.$parent.fontSize};`
            }else{
                return null
            }
        },
        inputStyle(){
            if(this.$parent.$options._componentTag === 'l-checkbox-group'){
                let style = ''
                style += `width:${this.$parent.iconSize}px;`
                style += `height:${this.$parent.iconSize}px;`
                style += `font-size:${this.$parent.iconSize/2}px;`
                if(this.disable){
                    style += `background-color: #f5f7fa;`
                }
                return style
            }else{
                return null
            }
        },
        inputActiveStyle(){
            if(this.$parent.$options._componentTag === 'l-checkbox-group'){
                let style = ''
                if(this.$parent.activeValue.includes(this.value)){
                    if(this.disable){
                        style += `background-color: #c0c4cc;`
                    }else{
                        style += `background-color: #E44258;`
                    }
                }
                return style
            }else{
                return null
            }
        }
    },
    created(){
        if(this.$parent.$options._componentTag === 'l-checkbox-group'){
            this.$parent.createCheckbox(this)
        }
    },
    destroyed(){
        if(this.$parent.$options._componentTag === 'l-checkbox-group'){
            this.$parent.delCheckbox(this)
        }
    },
    methods: {
        check(){
            if(this.disable){
                return
            }
            this.$parent.checkboxClick(this.value)
        }
    }
}
</script>