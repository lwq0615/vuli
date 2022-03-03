<template>
    <tr :class="`vu-table-tr ${mainNode.activeRow === this.index ? 'active' : ''}`" @click="trClick" ref="tr">
        <td v-if="mainNode.selection" class="vu-table-td" colspan="1" :style="mainNode.tdStyle({sticky:'left'})">
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
        thOption: Array
    },
    data(){
        return {
            observer: null
        }
    },
    computed: {
        checked(){
            if(this.data){
                return this.mainNode.selectData.includes(this.data) ? 'checked' : ''
            }else{
                return this.mainNode.selectData.length === this.mainNode.tableData.length ? 'checked' : ''
            }
        },
        tdOption(){
            return this.getChild(this.thOption)
        }
    },
    mounted(){
        if(this.data){
            const observer = new MutationObserver(this.bindTd);
            observer.observe(this.$el, {
                childList: true,
                subTree: true
            })
            this.observer = observer
        }
    },
    beforeDestroy(){
        this.observer.disconnect()
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
        getChild(options){
            let res = []
            for(let item of options){
                if(item.children.length){
                    res = res.concat(this.getChild(item.children))
                }else{
                    res.push(item)
                }
            }
            return res
        },
        bindTd(){
            let domObj = {}
            for(let i=0;i<this.$refs.tr.children.length;i++){
                let td = this.$refs.tr.children[i]
                if(td.nodeName === 'TD' && td.getAttribute('prop')){
                    domObj[td.getAttribute('prop')] = td
                }
            }
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
                            domObj[item.prop].innerText = ''
                            item.refreshDom()
                            domObj[item.prop].appendChild(item.$el)
                        }
                    }
                }
            }
            getChild(this)
        }
    }
}
</script>