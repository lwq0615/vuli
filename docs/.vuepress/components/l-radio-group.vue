<template>
    <div class="l-radio-group_container">
        <div class="grid" :style="`${columnsStyle+rowHeightStyle}`"><slot></slot></div>
    </div>
</template>

<script>
export default {
    name: 'lRadioGroup',
    props:{
        value: {
            type: [String,Number],
            default: null
        },
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
            let rows = Math.ceil(this.radios.length/(this.columns ? this.columns.length : 3))
            return `grid-template-rows: repeat(${rows}, ${this.rowHeight});`
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
        radioClick(value){
            this.$emit('radioClick',value)
            this.changeValue(value)
        },
        changeValue(value){
            if(this.activeValue !== value){
                this.$emit('change',{newVal:value,oldVal:this.activeValue})
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
@import './radio-group.scss';
</style>>