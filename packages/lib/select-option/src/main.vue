<template>
    <div 
        class="options-list" 
        v-show="!$parent.openSearch || !$parent.showOptions || label.includes($parent.form.label || '')"
        @mousedown="checkOption"
        @click="$emit('click',{value,label})"
        :style="`color:${value == $parent.form.value ? '#E44258' : '#606266'};background-color:${value == $parent.form.value ? '#f5f7fa' : ''};`"
    >{{label}}</div>
</template>

<script>
export default {
    name: 'l-select-option',
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
        if(this.$parent.$options._componentTag === 'l-select'){
            let option = {
                value: this.value,
                label: this.label
            }
            this.$parent.options.push(option)
        }
    },
    destroyed(){
        if(this.$parent.$options._componentTag === 'l-select'){
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
            this.$parent.checkOption(option)
        }
    }
}
</script>