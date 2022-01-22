<template>
    <div class="l-select_container" :style="`width:${width}`">
        <input 
            class="show-text"
            :placeholder="tempLabel || '请选择'"
            @click="selectClick()"
            v-model="form.label"
            :style="`background-color:${disable ? '#F5F7FA' : '#fff'}`"
            @input="searchInput"
            v-show="openSearch"
            :title="form.label"
        >
        <div 
            class="show-text" 
            v-show="!openSearch"
            :title="form.label"
            @click="selectClick()"
            :style="`color:${form.label ? '#606266' : '#757575'};background-color:${disable ? '#F5F7FA' : '#fff'}`"
        >
            {{form.label || '请选择'}}
        </div>
        <div class="options" :style="`height:${showOptions ? options.length*34+'px' : '0'}`" v-show="!search">
            <div 
                class="options-list" 
                v-for="(item,index) in options" 
                :key="index" 
                :title="item.label"
                v-show="item.label.includes(search)"
                @click="checkOption(item)"
                :style="`color:${item.value == form.value ? '#E44258' : '#606266'};background-color:${item.value == form.value ? '#f5f7fa' : ''};`"
            >{{item.label}}</div>
        </div>
        <div class="options" :style="`height:${showOptions ? searchData.length*34+'px' : '0'}`" v-show="search">
            <div 
                class="options-list" 
                v-for="(item,index) in searchData" 
                :key="index" 
                :title="item.label"
                v-show="item.label.includes(search)"
                @click="checkOption(item)"
                :style="`color:${item.value == form.value ? '#E44258' : '#606266'};background-color:${item.value == form.value ? '#f5f7fa' : ''};`"
            >{{item.label}}</div>
        </div>
        <div class="delete-btn" @click="deleteCheck($event)" v-show="deleteBtn">×</div>
    </div>
</template>

<script>
export default {
    name: 'lSelect',
    props:{
        options: Array,
        value: {
            type: [String,Number],
            default: null
        },
        width: {
            type: String,
            default: '200px'
        },
        deleteBtn: {
            type: Boolean,
            default: true
        },
        openSearch: {
            type: Boolean,
            default: true
        },
        disable: {
            type: Boolean,
            default: false
        }
    },
    model:{
        prop: 'value',
        event: 'model'
    },
    data(){
        return {
            form: {
                label: null,
                value: null
            },
            showOptions: false,
            tempLabel: null,
            search: '',
            searchData: []
        }
    },
    watch:{
        value:{
            handler(newVal){
                for(let item of this.options){
                    if(item.value === newVal){
                        this.checkOption(item)
                    }
                }
            }
        }
    },
    created(){
        for(let item of this.options){
            if(item.value === this.value){
                this.form = {...item}
            }
        }
    },
    methods:{
        /**
         * 点击select
         */
        selectClick(){
            if(this.disable){
                return
            }
            this.showOptions = !this.showOptions
            if(this.openSearch){
                if(this.showOptions){
                    //列表打开，输入框清空
                    this.tempLabel = this.form.label
                    this.form.label = ''
                }else{
                    this.form.label = this.tempLabel
                    this.tempLabel = ''
                    this.search = ''
                }
            }
        },
        checkOption(option){
            if(option){
                if(option.value !== this.form.value){
                    this.$emit('change',{newVal:option.value,oldVal:this.form.value})
                    this.form = {...option}
                    this.$emit('model',option.value)
                }
                this.showOptions = false
                this.tempLabel = ''
                this.search = ''
            }else{
                if(this.form.value !== null){
                    this.$emit('change',{newVal:null,oldVal:this.form.value})
                }
                this.form = {
                    label: null,
                    value: null
                }
                this.$emit('model',null)
            }
        },
        deleteCheck(e){
            e.stopPropagation()
            if(this.disable){
                return
            }
            this.checkOption(null)
        },
        searchInput(e){
            this.search = e.target.value
            this.searchData = []
            for(let item of this.options){
                if(item.label.includes(this.search)){
                    this.searchData.push(item)
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.l-select_container {
    display: inline-block;
    position: relative;
    height: 40px;
    .show-text {
        background-color: #fff;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        text-align: left;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        flex: 1;
        width: 100%;
        cursor: pointer;
        overflow:hidden; //超出的文本隐藏
        text-overflow:ellipsis; //溢出用省略号显示
        white-space:nowrap; //溢出不换行
    }

    .options {
        transition: all ease 0.3s;
        overflow-y: auto;
        overflow-x: hidden;
        width: 100%;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
        margin: 5px 0;
        max-height: 170px;
        position: absolute;
        z-index: 2;
        left: 0;
        top: 40px;

        .options-list {
            height: 34px;
            line-height: 34px;
            text-align: left;
            padding-left: 15px;
            width: 100%;
            overflow:hidden; //超出的文本隐藏
            text-overflow:ellipsis; //溢出用省略号显示
            white-space:nowrap; //溢出不换行
            cursor: pointer;
        }
        .options-list:hover {
            background-color: #f5f7fa;
        }
    }
    .options::-webkit-scrollbar {
        display: none;
    }
    .delete-btn {
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
    }
}

</style>>