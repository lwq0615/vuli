<template>
    <div class="vu-checkbox_container" :style="oneColumn">
        <div class="flex" @click="check">
            <div class="input" :style="inputStyle+inputActiveStyle">{{active() ? '√' : ''}}</div>
            <div class="text" :style="fontSizeStyle+textActiveStyle"><slot></slot></div>
        </div>
        <input 
        v-if="!all"
        type="checkbox" 
        style="display:none;" 
        :value="value" 
        :name="$parent.name" 
        :checked="active()">
    </div>
</template>

<script>
export default {
    name: 'vu-checkbox',
    props: {
        value: [String,Number],
        disable: {
            type: Boolean,
            default: false
        },
        all: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        textActiveStyle(){
            if(this.$parent.$options._componentTag === 'vu-checkbox-group'){
                let style = ''
                if(this.active()){
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
            if(this.$parent.$options._componentTag === 'vu-checkbox-group'){
                return `font-size:${this.$parent.fontSize};`
            }else{
                return null
            }
        },
        inputStyle(){
            if(this.$parent.$options._componentTag === 'vu-checkbox-group'){
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
            if(this.$parent.$options._componentTag === 'vu-checkbox-group'){
                let style = ''
                if(this.active()){
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
        },
        oneColumn(){
            if(this.all){
                return `grid-column-start:1;grid-column-end:-1;`
            }else{
                return ''
            }
        }
    },
    created(){
        if(!this.all && this.$parent.$options._componentTag === 'vu-checkbox-group'){
            this.$parent.createCheckbox(this)
        }
    },
    destroyed(){
        if(!this.all && this.$parent.$options._componentTag === 'vu-checkbox-group'){
            this.$parent.delCheckbox(this)
        }
    },
    methods: {
        check(){
            this.$emit('click',this.value)
            if(this.disable){
                return
            }
            if(this.all){
                this.$parent.checkAll()
            }else{
                this.$parent.checkboxClick(this.value)
            }
        },
        active(){
            if(this.$parent.$options._componentTag === 'vu-checkbox-group'){
                if(this.all){
                    return this.$parent.allFlg()
                }else{
                    if(this.$parent.value.includes(this.value)){
                        return true
                    }
                }
            }
        }
    }
}
</script>