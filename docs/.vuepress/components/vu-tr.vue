<template>
    <tr 
    :class="`vu-table-tr ${mainNode.activeRow === this.index ? 'active' : ''}`" 
    @click="trClick" 
    v-if="refresh">
        <td 
        v-show="mainNode.selection" 
        class="vu-table-td" 
        colspan="1" 
        :style="mainNode.tdStyle({sticky:'left'})+'width:auto;'">
            <div 
            :class="`checkbox ${checked}`" 
            @click="check">
                {{checked ? '√' : ''}}
            </div>
        </td>
        <td 
        class="vu-table-td"
        colspan="1"
        :prop="item.prop"
        v-for="(item,i) in tdOption"
        :key="i"
        :style="mainNode.tdStyle(item)"></td>
        <slot></slot>
    </tr>
</template>

<script>
export default {
    props: {
        data: Object,
        index: Number,
        mainNode: Object,
        tdOption: Array
    },
    data(){
        return {
            observer: null,
            domObj: {},
            refresh: true
        }
    },
    computed: {
        checked(){
            if(this.data){
                return this.mainNode.selectData.includes(this.data) ? 'checked' : ''
            }else{
                return this.tableData && this.mainNode.selectData.length === this.mainNode.tableData.length ? 'checked' : ''
            }
        }
    },
    watch: {
        tdOption(){
            this.refreshDom()
        }
    },
    destroyed(){
        if(this.mainNode.selectData.includes(this.data)){
            this.mainNode.selectData.splice(this.mainNode.selectData.indexOf(this.data),1)
        }    
    },
    methods: {
        trClick(){
            this.mainNode.$emit('click',this.data,this.index)
            if(this.mainNode.checkable){
                this.mainNode.activeRow = this.index
            }
        },
        check(e){
            e.stopPropagation()
            if(this.data){
                this.mainNode.selectRow(this.data)
            }else{
                this.mainNode.selectRow()
            }
        },
        bindTd(){
            let domObj = {}
            for(let i=0;i<this.$el.children.length;i++){
                let td = this.$el.children[i]
                if(td.nodeName === 'TD' && td.getAttribute('prop')){
                    domObj[td.getAttribute('prop')] = td
                }
            }
            this.domObj = domObj
            let getChild = function(parent){
                for(let item of parent.$children){
                    if(item.$options._componentTag === 'vu-table-column'){
                        let last = true
                        for(let child of item.$children){
                            if(child.$options._componentTag === 'vu-table-column'){
                                last = false
                            }
                        }
                        if(!last){
                            getChild(item)
                        }else{
                            if(domObj[item.prop]){
                                item.refreshDom()
                                domObj[item.prop].appendChild(item.$el)
                            }
                        }
                    }
                }
            }
            getChild(this)
        },
        refreshDom(){
            this.refresh = false
            this.$nextTick(() => {
                this.refresh = true
                this.$nextTick(() => {
                    this.bindTd()
                })
            })
        }
    }
}
</script>