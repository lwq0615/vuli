<template>
    <div class="vu-radio_container">
        <div class="flex" @click="check">
            <div class="input" :style="inputStyle+inputActiveStyle"></div>
            <div class="text" :style="fontSizeStyle+textActiveStyle"><slot></slot></div>
        </div>
        <input 
        type="radio" 
        style="display:none;" 
        :value="value" 
        :name="$parent.name" 
        :checked="$parent.value === value"
        @invalid="invalid"
        :required="$parent.required">
    </div>
</template>

<script>
export default {
    name: 'vu-radio',
    props: {
        value: {
            type: [String,Number,Boolean],
            default: null
        },
        disable: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        textActiveStyle(){
            if(this.$parent.$options._componentTag === 'vu-radio-group'){
                let style = ''
                if(this.$parent.value === this.value){
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
            if(this.$parent.$options._componentTag === 'vu-radio-group'){
                return `font-size:${this.$parent.fontSize};`
            }else{
                return null
            }
        },
        inputStyle(){
            if(this.$parent.$options._componentTag === 'vu-radio-group'){
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
            if(this.$parent.$options._componentTag === 'vu-radio-group'){
                let style = ''
                if(this.$parent.value === this.value){
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
        if(this.$parent.$options._componentTag === 'vu-radio-group'){
            this.$parent.createRadio(this)
        }
    },
    destroyed(){
        if(this.$parent.$options._componentTag === 'vu-radio-group'){
            this.$parent.delRadio(this)
        }
    },
    methods: {
        check(){
            this.$emit('click',this.value)
            if(this.disable){
                return
            }
            this.$parent.changeValue(this.value)
        },
        invalid(e){
            if(this.$parent.$options._componentTag === 'vu-radio-group' && this.$parent.$children.indexOf(this) === 0){
                this.$parent.$emit('invalid',e)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
 .vu-radio_container{
    display: inline-block;
    cursor: pointer;
    .flex{
        display: flex;
        align-items: center;
        .input{
            border-radius: 50%;
            background-color: white;
            margin: 0 5px;
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