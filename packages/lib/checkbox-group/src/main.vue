<template>
    <div class="vu-checkbox-group_container">
        <div class="grid" :style="columnsStyle+justifyStyle+rowHeightStyle"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name: 'vu-checkbox-group',
    props:{
        value: {
            type: Array,
            required: true
        },
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
            handler(newVal){
                this.$emit('change',newVal)
            }
        }
    },
    methods: {
        checkboxClick(value){
            if(this.value.includes(value)){
                this.value.splice(this.value.indexOf(value),1)
            }else{
                this.value.push(value)
            }
        },
        createCheckbox(dom){
            this.checkboxs.push(dom)
        },
        delCheckbox(dom){
            if(this.value.includes(dom.value)){
                this.value.splice(this.value.indexOf(dom.value),1)
            }
            this.checkboxs.splice(this.checkboxs.indexOf(dom),1)
        },
        checkAll(){
            if(this.allFlg(true)){
                this.value.splice(0)
            }else{
                this.checkboxs.forEach(item => {
                    if(!item.disable && !this.value.includes(item.value)){
                        this.value.push(item.value)
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
                return this.value.length === num
            }else{
                return this.value.length === this.checkboxs.length
            }
        }
    }
}
</script>