<template>
    <div class="l-checkbox-group_container">
        <div class="grid" :style="`${columnsStyle+rowHeightStyle}`"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name: 'l-checkbox-group',
    props:{
        value: Array,
        columns: Array,
        rowHeight: {
            type: String,
            default: '50px'
        },
        fontSize: {
            type: String,
            default: '14px'
        },
        iconSize: {
            type: Number,
            default: 16
        },
        name: String
    },
    data(){
        return {
            activeValue: [],
            checkboxs: []
        }
    },
    computed: {
        columnsStyle(){
            if(this.columns){
                let str = ''
                for(let item of this.columns){
                    str += ` ${item}fr`
                }
                return `grid-template-columns: ${str};`
            }else{
                return 'grid-template-columns: 1fr 1fr 1fr;'
            }
        },
        rowHeightStyle(){
            let rows = Math.ceil(this.checkboxs.length/(this.columns ? this.columns.length : 3))
            return `grid-template-rows: repeat(${rows}, ${this.rowHeight});`
        }
    },
    watch:{
        value: {
            handler(newVal,oldVal){
                if(newVal !== oldVal){
                    this.activeValue = newVal
                }
                this.$emit('change',this.activeValue)
            }
        }
    },
    created(){
        this.activeValue = this.value || []
    },
    methods: {
        checkboxClick(value){
            this.$emit('checkboxClick',value)
            if(this.activeValue.includes(value)){
                this.activeValue.splice(this.activeValue.indexOf(value),1)
            }else{
                this.activeValue.push(value)
            }
        },
        createCheckbox(dom){
            this.checkboxs.push(dom)
        },
        delCheckbox(dom){
            if(this.activeValue.includes(dom.value)){
                let newValue = this.activeValue.slice()
                newValue.splice(newValue.indexOf(dom.value),1)
                this.changeValue(newValue)
            }
            this.checkboxs.splice(this.checkboxs.indexOf(dom),1)
        }
    }
}
</script>