<template>
    <div class="vu-radio-group_container">
        <div class="grid" :style="`${columnsStyle+rowHeightStyle+justifyStyle}`"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name: 'vu-radio-group',
    props:{
        value: {
            type: [String,Number],
            default: null
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
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    model: {
        prop: 'value',
        event: 'model'
    },
    data(){
        return {
            radios: [],
            activeValue: undefined
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
        rowHeightStyle(){
            return `grid-template-rows: ${this.rowHeight};grid-auto-rows:${this.rowHeight};`
        },
        justifyStyle(){
            return `justify-items: ${this.justify};`
        }
    },
    watch:{
        value: {
            handler(newVal){
                this.changeValue(newVal)
            }
        }
    },
    created(){
        this.activeValue = this.value
    },
    methods: {
        changeValue(value){
            if(this.activeValue !== value){
                this.$emit('change',value)
                this.activeValue = value
                this.$emit('model',value)
            }
        },
        createRadio(dom){
            this.radios.push(dom)
        },
        delRadio(dom){
            if(dom.value === this.activeValue){
                this.changeValue(null)
            }
            this.radios.splice(this.radios.indexOf(dom),1)
        }
    }
}
</script>

<style lang="scss" scoped>
.vu-radio-group_container{
    display: inline-block;
    overflow: auto;
    width: 100%;
    .grid{
        width: 100%;
        height: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        overflow: auto;
    }
}
</style>>