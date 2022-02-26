<template>
    <div 
    :class="`options-list ${value == $parent.form.value ? 'active' : ''}`" 
    v-show="!$parent.openSearch || !$parent.showOptions || label.includes($parent.form.label || '')"
    @mousedown="$event.preventDefault()"
    @click="checkOption">{{label}}</div>
</template>

<script>
export default {
    name: 'vu-select-option',
    props: {
        value: {
            type: [String,Number],
            required: true
        },
        label: {
            type: [String,Number],
            required: true
        }
    },
    created(){
        if(this.$parent.$options._componentTag === 'vu-select'){
            let option = {
                value: this.value,
                label: this.label
            }
            this.$parent.options.push(option)
        }
    },
    destroyed(){
        if(this.$parent.$options._componentTag === 'vu-select'){
            for(let i in this.$parent.options){
                if(this.$parent.options[i].value === this.value){
                    this.$parent.options.splice(i,1)
                }
            }
        }
    },
    methods: {
        checkOption(){
            let option = {
                value: this.value,
                label: this.label
            }
            this.$emit('click',option)
            if(this.$parent.$options._componentTag === 'vu-select'){
                this.$parent.checkOption(option)
                this.$parent.$refs.showText.blur()
            }
        }
    }
}
</script>