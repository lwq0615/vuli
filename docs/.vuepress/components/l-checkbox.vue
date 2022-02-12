<template>
    <div class="l-checkbox_container">
        <div class="flex" @click="check">
            <div class="input" :style="inputStyle+inputActiveStyle">{{$parent.activeValue.includes(value) ? '√' : ''}}</div>
            <div class="text" :style="fontSizeStyle+textActiveStyle"><slot></slot></div>
        </div>
        <input type="checkbox" style="display:none;" :value="value" 
        :name="$parent.name" :checked="$parent.activeValue.includes(value)">
    </div>
</template>

<script>
export default {
    name: 'l-checkbox',
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

<style lang="scss" scoped>
.l-checkbox_container{
    display: inline-block;
    cursor: pointer;
    .flex{
        display: flex;
        align-items: center;
        .input{
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: auto;
            border-radius: 3px;
            background-color: white;
            margin-right: 5px;
            border: 1px solid #e4e7ed;
            box-sizing: border-box;
            color: white;
            transition: all ease 0.3s;
        }
        .text{
            color: #606266;
            transition: all ease 0.3s;
        }
    }
}
</style>