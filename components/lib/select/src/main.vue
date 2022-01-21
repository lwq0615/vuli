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