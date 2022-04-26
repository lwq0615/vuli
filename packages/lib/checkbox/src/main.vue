<template>
    <div class="vu-checkbox_container" :style="oneColumn">
        <div class="flex" @click="check">
            <div class="input" :style="inputStyle+inputActiveStyle">{{active ? '√' : ''}}</div>
            <div class="text" :style="fontSizeStyle+textActiveStyle"><slot></slot></div>
        </div>
        <input 
        v-if="!all"
        type="checkbox" 
        style="display:none;" 
        :value="value" 
        :name="$parent.name" 
        :checked="active">
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
    data(){
        return {
            parent: this.findParent()
        }
    },
    computed: {
        textActiveStyle(){
            let parent = this.parent
            if(parent){
                let style = ''
                if(this.active){
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
            let parent = this.parent
            if(parent){
                return `font-size:${parent.fontSize};`
            }else{
                return null
            }
        },
        inputStyle(){
            let parent = this.parent
            if(parent){
                let style = ''
                style += `width:${parent.iconSize}px;`
                style += `height:${parent.iconSize}px;`
                style += `font-size:${parent.iconSize/2}px;`
                if(this.disable){
                    style += `background-color: #f5f7fa;`
                }
                return style
            }else{
                return null
            }
        },
        inputActiveStyle(){
            let parent = this.parent
            if(parent){
                let style = ''
                if(this.active){
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
        },
        active(){
            let parent = this.parent
            if(parent){
                if(this.all){
                    return parent.allFlg()
                }else if(parent.value.includes(this.value)){
                    return true
                }
            }
            return false
        }
    },
    created(){
        let parent = this.parent
        if(parent && !this.all){
            parent.createCheckbox(this)
        }
    },
    destroyed(){
        let parent = this.parent
        if(parent && !this.all){
            parent.delCheckbox(this)
        }
    },
    methods: {
        check(){
            this.$emit('click',this.value)
            if(this.disable){
                return
            }
            let parent = this.parent
            if(parent){
                if(this.all){
                    parent.checkAll()
                }else{
                    parent.checkboxClick(this.value)
                }
            }
        },
        findParent(){
            let parent = this.$parent
            while(parent){
                if(parent.$options._componentTag === 'vu-checkbox-group'){
                    return parent
                }
            }
            return false
        }
    }
}
</script>