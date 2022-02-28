<template>
    <section class="vu-cascader_container">
        <input 
        ref="input"
        type="text" 
        :class="disable ? 'disable' : ''"
        readonly 
        :value="label.join(join || ' / ')" 
        :placeholder="placeholder"
        @blur="hideMenu"
        @click="showMenu({children:option},0)">

        <div class="clear-icon" v-if="clearable" @click="clear">×</div>
        <div :class="`arrow ${show ? 'active' : ''}`" v-else>></div>

        <transition name="rotate-top">
            <div class="menu" v-show="show" @mousedown="$event.preventDefault()">
                <div 
                class="menu-panel"
                v-for="(menu,i) in menuList"
                :style="`max-height:${menuHeight};width:${menuWidth};`"
                :key="i">
                    <div
                    :class="`menu-item ${tempValue[i] === item.value ? 'active' : ''}`" 
                    v-for="(item,j) in menu" 
                    :key="j"
                    @mouseover="hover && item.children && showMenu(item,i+1)"
                    @click="showMenu(item,i+1)">
                        {{item.label}}
                        <span v-if="childCount">{{item.children ? '('+item.children.length+')' : ''}}</span>
                        <div 
                        class="arrow" 
                        style="transform: rotateZ(0deg);"
                        v-if="item.children">></div>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
export default {
    name: 'vu-cascader',
    props: {
        option: {
            type: Array,
            required: true
        },
        value: {
            type: Array,
            required: true
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        menuHeight: {
            type: String,
            default: '200px'
        },
        menuWidth: {
            type: String,
            default: '180px'
        },
        hover: Boolean,
        disable: Boolean,
        clearable: Boolean,
        showLast: Boolean,
        join: String,
        childCount: Boolean,
        overChange: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            show: false,
            menuList: [],
            label: [],
            tempValue: [],
            oldVal: []
        }
    },
    watch: {
        value(newVal){
            if(this.oldVal.length === newVal.length){
                for(let i in newVal){
                    if(newVal[i] !== this.oldVal[i]){
                        this.$emit('change',newVal)
                        break
                    }
                }
            }else{
                this.$emit('change',newVal)
            }
            this.oldVal = [...newVal]
            this.label = []
            this.updateLabel(newVal)
        }
    },
    created(){
        this.updateLabel(this.value)
    },
    methods: {
        checkValue(item,level){
            this.tempValue[level-1] = item.value
            this.tempValue.splice(level)
            if(this.overChange){
                if(!item.children){
                    this.value.splice(0)
                    Object.assign(this.value,this.tempValue)
                }
            }else{
                this.value.splice(0)
                Object.assign(this.value,this.tempValue)
            }
            
        },
        hideMenu(){
            if(this.show){
                this.show = false
                this.$emit('hide')
            }
        },
        showMenu(option,level){
            if(this.disable){
                return
            }
            if(!this.show){
                this.show = true
                this.$emit('show')
            }
            if(!level && this.menuList.length){
                return
            }
            if(option.children){
                this.menuList[level] = option.children
                this.menuList = this.menuList.splice(0,level+1)
            }else{
                this.menuList = this.menuList.splice(0,level)
                this.$refs.input.blur()
                this.$emit('check',option)
            }
            if(level){
                this.checkValue(option,level)
            }
        },
        clear(){
            this.$emit('clear')
            this.value.splice(0)
            this.label.splice(0)
        },
        updateLabel(newVal){
            let i = 0
            let temp = this.option
            this.label = []
            while(i < newVal.length){
                for(let item of temp) {
                    if(item.value === newVal[i]){
                        this.label.push(item.label)
                        temp = item.children
                        break
                    }
                }
                i++
            }
        }
    }
}
</script>