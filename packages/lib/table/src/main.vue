<template>
    <table :class="tableClass">
        <slot></slot>
        
        <tr class="vu-table-tr" v-for="(item,index) in levelTh" :key="'row'+index">
            <th 
            :style="tdStyle({sticky:'left'})+'width:auto;'"
            v-show="mainNode.selection && index === 0" 
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
            v-for="(th,i) in item"
            :style="tdStyle(th)"
            :colspan="th.cols || 1"
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
        :tdOption="tdOption"
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
            levelTh: [],
            tdOption: []
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
            return this.tableData && this.selectData.length === this.tableData.length ? 'checked' : ''
        }
    },
    watch:{
        selectData(newVal){
            this.$emit('select',[...newVal])
        },
        thOption:{
            deep: true,
            handler(newVal){
                this.tdOption = this.getChild(newVal)
                this.levelTh = this.getLevelTh(newVal)
            }
        }
    },
    methods: {
        getSelectData(){
            return [...this.selectData]
        },
        clearSelect(){
            if(this.selectData.length){
                this.selectData = []
            }
            this.$emit('clearSelect')
        },
        selectAll(){
            if(this.tableData && this.selectData.length !== this.tableData.length){
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
                if(this.tableData && this.selectData.length === this.tableData.length){
                    this.selectData = []
                }else{
                    this.selectData = [...this.tableData]
                }
            }
        },
        tdStyle(option){
            let style = ''
            style += `text-align:${option.align || 'center'};`
            style += `min-width:${option.width || 'auto'};`
            style += `line-height:${this.lineHeight || 'auto'};`
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
        },
        getChild(options){
            let res = []
            for(let item of options){
                if(item.children && item.children.length){
                    res = res.concat(this.getChild(item.children))
                }else{
                    res.push(item)
                }
            }
            return res
        },
        getLevelTh(thOption){
            let levelTh = [thOption]
            let i = 0
            while(levelTh[i] && levelTh[i].length){
                for(let item of levelTh[i]){
                    for(let child of item.children){
                        if(!levelTh[i+1]){
                            levelTh[i+1] = []
                        }
                        levelTh[i+1].push(child)
                    }
                }
                i++
            }
            return levelTh
        }
    }
}
</script>