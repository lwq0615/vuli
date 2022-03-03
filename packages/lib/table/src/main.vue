<template>
    <table :class="tableClass">
        <slot></slot>
        
        <tr class="vu-table-tr" v-for="(item,index) in levelTh" :key="'row'+index">
            <th 
            :style="tdStyle({sticky:'left'})"
            v-if="mainNode.selection && index === 0" 
            class="vu-table-th" 
            :rowspan="levelTh.length"
            colspan="1">
                <div 
                :class="`checkbox ${checked}`" 
                @click="check">
                    {{checked ? '√' : ''}}
                </div>
            </th>
            <th
            class="vu-table-th"
            :style="tdStyle(th)"
            v-for="(th,i) in item"
            :colspan="th.cols"
            :rowspan="!th.children.length ? levelTh.length - index : 1"
            :key="'col'+i">
                {{th.label}}
            </th>
        </tr>
        
        <vu-tr 
        :mainNode="mainNode"
        v-for="(item,index) in tableData"
        :key="index"
        :index="index"
        :thOption="thOption"
        :data="item">
            <slot></slot>
        </vu-tr>
    </table>
</template>

<script>
import vuTr from './tr.vue'
export default {
    name: 'vu-table',
    components: {
        vuTr
    },
    props: {
        tableData: Array,
        border: {
            type: Boolean,
            default: true
        },
        striped: {
            type: Boolean,
            default: true
        },
        checkable: {
            type: Boolean,
            default: true
        },
        selection: {
            type: Boolean,
            default: true
        },
        lineHeight: {
            type: String,
            default: '25px'
        }
    },
    data(){
        return {
            mainNode: this,
            activeRow: null,
            selectData: [],
            thOption: [],
            levelTh: []
        }
    },
    computed: {
        tableClass(){
            let classs = 'vu-table_container'
            classs += this.border ? ' border' : ''
            classs += this.striped ? ' striped' : ''
            return classs
        },
        checked(){
            return this.selectData.length === this.tableData.length ? 'checked' : ''
        }
    },
    watch:{
        thOption: {
            deep: true,
            handler(newVal){
                let levelTh = [newVal]
                let i = 0
                while(levelTh[i].length){
                    for(let item of levelTh[i]){
                        if(!levelTh[i+1]){
                            levelTh[i+1] = []
                        }
                        for(let child of item.children){
                            levelTh[i+1].push(child)
                        }
                    }
                    i++
                }
                if(!levelTh[levelTh.length-1].length){
                    levelTh.pop()
                }
                this.levelTh = levelTh
            }
        },
        selectData(newVal){
            this.$emit('select',[...newVal])
        }
    },
    methods: {
        getSelectData(){
            return this.selectData
        },
        clearSelect(){
            if(this.selectData.length){
                this.selectData = []
            }
            this.$emit('clearSelect')
        },
        selectAll(){
            if(this.selectData.length !== this.tableData.length){
                this.selectData = [...this.tableData]
            }
            this.$emit('selectAll',[...this.selectData])
        },
        selectRow(row){
            if(row){
                if(this.selectData.includes(row)){
                    this.selectData.splice(this.selectData.indexOf(row),1)
                }else{
                    this.selectData.push(row)
                }
            }else{
                if(this.selectData.length === this.tableData.length){
                    this.selectData = []
                }else{
                    this.selectData = [...this.tableData]
                }
            }
        },
        tdStyle(option){
            let style = ''
            style += `text-align:${option.align || 'center'};`
            style += `width:${option.width || 'auto'};`
            style += `min-width:${option.width || 'auto'};`
            style += `max-width:${option.width || 'auto'};`
            style += `height:${this.mainNode.lineHeight || 'auto'};`
            style += `line-height:${this.mainNode.lineHeight || 'auto'};`
            if(option.sticky === 'right'){
                style += `right:0;`
                style += `z-index:3;`
            }else if(option.sticky === 'left'){
                style += `left:0;`
                style += `z-index:3;`
            }
            return style
        },
        check(e){
            e.stopPropagation()
            this.selectRow()
        }
    }
}
</script>