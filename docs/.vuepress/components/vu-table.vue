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
import vuTr from './vu-tr.vue'
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

<style lang="scss">
.vu-table_container {
    border-collapse: unset;
    overflow: auto;
    display: inline-block;
    border-spacing: 0;
    border-radius: 3px;
    position: relative;
    border: 1px solid #dcdfe6;
    .vu-table-tr {
        transition: all ease 0.1s;
        .vu-table-td,
        .vu-table-th {
            padding: 7px 5px;
            border-bottom: 1px solid #dcdfe6;
            color: #606266;
            overflow: hidden;
            word-wrap: break-word;
            position: sticky;
            background-color: white;
            .checkbox {
                margin: 0 3px;
                width: 16px;
                height: 16px;
                font-size: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: auto;
                border-radius: 3px;
                background-color: white;
                border: 1px solid #e4e7ed;
                box-sizing: border-box;
                color: white;
                user-select: none;
                transition: all ease 0.3s;
                cursor: pointer;
            }
            .checkbox.checked{
                background-color: #E44258;
            }
        }
        .vu-table-th {
            background-color: #f1f1f1 !important;
            font-size: 15px;
            font-weight: 600;
        }
        .vu-table-td {
            text-align: left;
            font-size: 14px;
            line-height: 20px;
        }
    }
    .vu-table-tr:hover {
        .vu-table-td,.vu-table-th{
            background-color: #f5f7fa;
        }
    }
    .vu-table-tr:last-child {
        border-bottom: none;
    }
    .vu-table-tr.active {
        .vu-table-td,
        .vu-table-th {
            background-color: #ffe4e4 !important;
        }
    }
}

.vu-table_container.border {
    .vu-table-tr {
        .vu-table-td,
        .vu-table-th {
            border: 1px solid #dcdfe6;
        }
    }
}

.vu-table_container.striped {
    .vu-table-tr:nth-child(2n + 1) {
        .vu-table-td {
            background-color: #f5f7fa;
        }
    }
}
</style>