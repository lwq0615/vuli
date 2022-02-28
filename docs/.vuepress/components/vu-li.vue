<template>
    <div class="vu-ul-li_container">
        <li :style="liStyle" @click="click" :class="liClass">
            <div class="arrow" v-if="item.children">></div>
            {{item.label}}
        </li>
        <vu-ul 
        :option="children" 
        v-if="children"
        :parent="parent"
        :open="open"></vu-ul>
    </div>
</template>

<script>
export default {
    components: {
        vuUl: () => import('./vu-ul.vue')
    },
    props: {
        item: Object,
        parent: Object
    },
    data(){
        return {
            open: false,
            children: this.item.children
        }
    },
    computed: {
        liStyle(){
            if(this.$parent.open){
                return `height:${this.parent.lineHeight};`
            }else{
                return `height:0;`
            }
        },
        liClass(){
            let className = ''
            if(this.open){
                className += ' open'
            }
            if(this.parent.activeNode === this){
                className += ' active'
            }
            return className
        }
    },
    created(){
        if(this.item.default){
            this.open = this.item.default
            let parent = this.$parent
            while(parent){
                if(parent.$options._componentTag === 'vu-li'){
                    parent.open = true
                }
                if(parent === this.parent){
                    break
                }
                parent = parent.$parent
            }
        }
    },      
    methods: {
        click(){
            this.parent.activeNode = this
            this.openOrCloseTree()
            let parent = this.$parent
            let optionPath = [{...this.item}]
            while(parent){
                if(parent.$options._componentTag === 'vu-li'){
                    optionPath.push({...parent.item})
                }
                if(parent === this.parent){
                    optionPath.reverse()
                    this.parent.$emit('click',optionPath)
                    break
                }
                parent = parent.$parent
            }
        },
        openOrCloseTree(){
            this.open = !this.open
            if(!this.open){
                this.closeChildTree(this)
            }
        },
        closeChildTree(node){
            if(node.$children.length){
                node.$children[0].$children.forEach(item => {
                    if(item.open){
                        item.openOrCloseTree()
                    }
                })
            }
        }
    }
}
</script>