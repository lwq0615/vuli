<template>
    <div class="l-checkbox-group_container">
        <div class="grid" :style="columnsStyle+justifyStyle+rowHeightStyle"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name: 'l-checkbox-group',
    props:{
        value: Array,
        columns: [Array,String],
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
        name: String,
        justify: {
            type: String,
            default: 'left'
        }
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
                if(Array.isArray(this.columns)){
                    let str = ''
                    for(let item of this.columns){
                        str += ` ${item}fr`
                    }
                    return `grid-template-columns: ${str};`
                }else if(typeof this.columns === 'string'){
                    return `grid-template-columns: repeat(auto-fill, ${this.columns});`
                }
            }else{
                return `grid-template-columns: repeat(auto-fill, 100px);`
            }
        },
        justifyStyle(){
            return `justify-items: ${this.justify};`
        },
        rowHeightStyle(){
            return `grid-template-rows: ${this.rowHeight};grid-auto-rows:${this.rowHeight};`
        }
    },
    watch:{
        value: {
            handler(newVal,oldVal){
                if(newVal !== oldVal){
                    this.activeValue = newVal
                }
            }
        },
        activeValue(newVal){
            this.$emit('change',newVal)
        }
    },
    created(){
        this.activeValue = this.value || []
    },
    methods: {
        checkboxClick(value){
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
                this.activeValue.splice(this.activeValue.indexOf(dom.value),1)
            }
            this.checkboxs.splice(this.checkboxs.indexOf(dom),1)
        },
        checkAll(){
            if(this.allFlg(true)){
                this.activeValue.splice(0)
            }else{
                this.checkboxs.forEach(item => {
                    if(!item.disable && !this.activeValue.includes(item.value)){
                        this.activeValue.push(item.value)
                    }
                })
            }
        },
        allFlg(disable){
            if(disable){
                let num = 0
                this.checkboxs.forEach(item => {
                    item.disable ? null : num++
                })
                return this.activeValue.length === num
            }else{
                return this.activeValue.length === this.checkboxs.length
            }
        }
    }
}
</script>