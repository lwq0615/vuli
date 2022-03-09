<template>
    <span v-if="parentTr && refresh">
        <slot :row="parentTr.data" :index="parentTr.index">{{parentTr.data[prop]}}</slot>
    </span>
    <span v-else v-show="false">
        <slot :row="mainNode.tableData && mainNode.tableData[0] || {}" :index="0"></slot>
    </span>
</template>

<script>
export default {
    name: 'vu-table-column',
    props: {
        prop: String,
        label: String,
        width: {
            type: String,
            default: 'auto'
        },
        align: {
            type: String,
            default: 'center'
        },
        sticky: String
    },
    data(){
        return {
            mainNode: this.getParent('vu-table'),
            parentTr: this.getParent('vu-tr'),
            option: {
                ...this._props,
                children: [],
                cols:0
            },
            refresh: true
        }
    },
    mounted(){
        if(!this.parentTr){
            this.cutParentCol(1)
            let temp = []
            for(let item of this.$parent.$slots.default){
                if(item.componentInstance instanceof this.constructor){
                    temp.push(item.componentInstance)
                }
            }
            if(this.$parent instanceof this.constructor){
                this.$parent.option.children.splice(temp.indexOf(this),0,this.option)
            }else{
                this.mainNode.thOption.splice(temp.indexOf(this),0,this.option)
            }
        }
    },
    destroyed(){
        if(!this.parentTr){
            if(this.$parent instanceof this.constructor){
                this.$parent.option.children.splice(this.$parent.option.children.indexOf(this.option),1)
                this.$parent.cutParentCol(-this.option.cols)
            }else if(this.$parent instanceof this.mainNode.constructor){
                this.mainNode.thOption.splice(this.mainNode.thOption.indexOf(this.option),1)
            }
        }
    },
    methods: {
        getParent(name){
            let parent = this.$parent
            while(parent){
                if(parent.$options._componentTag === name){
                    return parent
                }
                else if(parent.$options._componentTag === 'vu-table'){
                    if(name === 'vu-table'){
                        return parent
                    }else{
                        return null
                    }
                }
                parent = parent.$parent
            }
            return null
        },
        cutParentCol(col){
            if(this.$parent instanceof this.constructor){
                this.$parent.option.cols += col
                if(this.$parent.option.cols > 1){
                    this.$parent.cutParentCol(col)
                }
            }
        },
        refreshDom(){
            this.$nextTick(() => {
                this.refresh = true
                this.$nextTick(() => {
                    this.parentTr.domObj[this.prop].appendChild(this.$el)
                })
            })
            this.refresh = false
        }
    }
}
</script>