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

<style lang="scss" scoped>
.rotate-top-enter-active,
.rotate-top-leave-active {
    transform-origin: 0% 0%;
    transition: transform 0.2s;
}
.rotate-top-enter, .rotate-top-leave-to {
    transform-origin: 0% 0%;
    transform: rotateX(90deg);
}

.vu-cascader_container {
    position: relative;
    height: 40px;
    width: 250px;
    display: inline-block;
    input {
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #e4e7ed;
        outline: none;
        border-radius: 4px;
        color: #606266;
        font-size: 14px;
        padding: 0 15px;
        transition: all ease 0.2s;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;
    }
    input:focus {
        border: 1px solid #e44258;
    }
    .disable{
        background-color: #F5F7FA;
        cursor: no-drop;
    }
    .disable:focus{
        border: 1px solid #e4e7ed;
    }
    .arrow {
        position: absolute;
        color: #dcdfe6;
        font-weight: 600;
        font-family: fangsong;
        font-size: 13px;
        right: 0;
        top: 0;
        transform: rotateZ(90deg);
        height: 100%;
        width: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all ease 0.3s;
        pointer-events: none;
    }
    .arrow.active {
        transform: rotateZ(270deg);
    }

    .clear-icon {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: #dddddd;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #606266;
        cursor: pointer;
        user-select: none;
        font-family: fangsong;
        font-weight: 600;
        font-size: 12px;
    }

    .menu {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 99;
        margin: 5px 0;
        display: flex;
        align-items: flex-start;
        .menu-panel {
            width: 180px;
            box-shadow: 0 0 1px rgba($color: #000000, $alpha: 0.4);
            overflow: auto;
            border-radius: 2px;
            background-color: white;
            margin-right: 5px;
            .menu-item {
                position: relative;
                box-sizing: border-box;
                margin: 0;
                padding: 8px 0;
                text-align: left;
                padding-left: 15px;
                font-size: 14px;
                width: 100%;
                color: #606266;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                transition: all ease 0.1s;
                cursor: pointer;
            }
            .menu-item.active{
                background-color: #E44258 !important;
                color: white !important;
            }
            .menu-item.active .arrow{
                color: white;
            }
            .menu-item:hover {
                background-color: #F5F7FA;
            }
        }
        .menu-panel::-webkit-scrollbar {
            width: 6px;
        }
        .menu-panel::-webkit-scrollbar-thumb {
            background-color: rgba($color: #E44258, $alpha: 0.8);
            -webkit-border-radius: 100px;
            -moz-border-radius: 100px;
            border-radius: 100px;
        }
    }
    
}
</style>