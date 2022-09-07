<template>
    <section :class="`vu-crud_container ${load ? 'loading' : ''}`">

        <vu-row colGap="15px" rowGap="15px" v-if="option.search">
            <vu-col 
            v-for="(prop,index) in tdOption" 
            :key="'prop'+index"
            v-show="prop.search"
            :span="prop.span || 6">
                <div class="search-col">
                    <div class="search-col-text">{{prop.label}}</div>

                    <vu-select 
                    v-if="prop.type === 'select'"
                    placeholder="请选择"
                    :deleteBtn="prop.clear"
                    v-model="searchData[prop.name]" 
                    class="search-col-input">
                        <vu-select-option 
                        v-for="(option,i) in propDict[prop.name]"
                        :key="prop.name+i"
                        :label="option.label"
                        :value="option.value"></vu-select-option>
                    </vu-select>

                    <vu-input
                    v-else
                    placeholder="请输入"
                    :clearable="prop.clear"
                    v-model="searchData[prop.name]" 
                    class="search-col-input"></vu-input>
                </div>
            </vu-col>
        </vu-row>

        <div class="menu">
            <div class="buttons">
                <vu-button 
                size="small" 
                @click="add" 
                v-if="option.buttons && option.buttons.add" 
                color="primary">
                    {{typeof option.buttons.add === 'string' ? option.buttons.add : '新增'}}
                </vu-button>

                <vu-button 
                size="small" 
                @click="del($refs.table.getSelectData())" 
                v-if="option.buttons && option.buttons.delete"
                color="error">
                    {{typeof option.buttons.delete === 'string' ? option.buttons.delete : '删除'}}
                </vu-button>

                <vu-button 
                size="small" 
                @click="search" 
                v-if="option.search"
                color="error">
                    {{typeof option.search === 'string' ? option.search : '搜索'}}
                </vu-button>
            </div>

            <div class="switchs" v-if="option.switch">
                <vu-switch v-model="switchs['border']" @change="switchChange('border',$event)">显示边框&nbsp;</vu-switch>
                <vu-switch v-model="switchs['index']" @change="switchChange('index',$event)">显示索引&nbsp;</vu-switch>
                <vu-switch v-model="switchs['selection']" @change="switchChange('selection',$event)">显示复选框&nbsp;</vu-switch>
                <vu-switch v-model="switchs['striped']" @change="switchChange('striped',$event)">显示斑马纹&nbsp;</vu-switch>

                <div class="reload" @click="reload" v-if="option.reload"></div>
            </div>
        </div>

        <vu-table
        ref="table"
        width="100%"
        :tableData="tableData"
        :selection="switchs['selection']"
        :lineIndex="switchs['index']"
        :striped="switchs['striped']"
        :border="switchs['border']"
        @select="select"
        @click="tableClick">

            <vu-table-column
            v-for="(prop,index) in columns"
            :key="'th1'+index"
            :prop="prop.name"
            :dict="prop.dict"
            :align="prop.align || 'center'"
            :label="prop.label"
            :width="prop.width">
                <vu-table-column
                v-for="(prop2,index2) in prop.children"
                :key="'th2'+index2"
                :prop="prop2.name"
                :dict="prop.dict"
                :align="prop2.align || 'center'"
                :label="prop2.label"
                :width="prop2.width">
                    <vu-table-column
                    v-for="(prop3,index3) in prop2.children"
                    :key="'th3'+index3"
                    :prop="prop3.name"
                    :dict="prop.dict"
                    :align="prop3.align || 'center'"
                    :label="prop3.label"
                    :width="prop3.width">
                    </vu-table-column>
                </vu-table-column>
            </vu-table-column>

            <vu-table-column
            v-if="option.operation && Object.keys(option.operation).length"
            prop="vu-crud-menu"
            label="操作"
            sticky="right"
            v-slot="data"
            :width="operationWidth">
                <vu-button 
                style="margin-right:5px;"
                size="small" 
                @click="check(data.row)" 
                v-if="option.operation.check"
                color="primary">
                    {{typeof option.operation.check === 'string' ? option.operation.check : '查看'}}
                </vu-button>

                <vu-button 
                style="margin-right:5px;"
                size="small" 
                @click="edit(data.row,data.index)" 
                v-if="option.operation.edit"
                color="primary">
                    {{typeof option.operation.edit === 'string' ? option.operation.edit : '编辑'}}
                </vu-button>

                <vu-button 
                size="small" 
                @click="del([data.row])" 
                v-if="option.operation.delete"
                color="error">
                    {{typeof option.operation.delete === 'string' ? option.operation.delete : '删除'}}
                </vu-button>
            </vu-table-column>
        </vu-table>

        <vu-pagination 
        class="pagination"
        :page="page" 
        @pageChange="pageChange"
        :sizeList="option.paginationSizeList"
        :elements="option.paginationElements"></vu-pagination>



        <vu-dialog ref="dialog" width="700px" class="dialog" moveable>
            <div slot="title">
                {{dialogTitle}}
            </div> 
            <div slot="content" class="content">
                <vu-row colGap="15px" rowGap="15px" v-if="option.search">
                    <vu-col 
                    v-for="(prop,index) in tdOption" 
                    :key="'prop'+index"
                    v-show="dialogText === '新增' && prop.add || dialogText === '编辑' || dialogText === '查看'"
                    :span="12">
                        <div class="search-col">
                            <div class="search-col-text">
                                <span v-if="prop.must" class="must">*</span>
                                {{prop.label}}
                            </div>

                            <vu-select 
                            v-if="prop.type === 'select'"
                            placeholder="请选择"
                            :deleteBtn="dialogText !== '查看' && prop.clear"
                            :disable="dialogText === '编辑' && !prop.edit"
                            :readonly="dialogText === '查看'"
                            v-model="formData[prop.name]" 
                            class="search-col-input">
                                <vu-select-option 
                                v-for="(option,i) in propDict[prop.name]"
                                :key="prop.name+i"
                                :label="option.label"
                                :value="option.value"></vu-select-option>
                            </vu-select>

                            <vu-input
                            v-else
                            placeholder="请输入"
                            :clearable="dialogText !== '查看' && prop.clear"
                            :readonly="dialogText === '查看'"
                            :disable="dialogText === '编辑' && !prop.edit"
                            v-model="formData[prop.name]" 
                            class="search-col-input"></vu-input>
                        </div>
                    </vu-col>
                </vu-row>
            </div>
            <div slot="footer" style="text-align:right;">
                <vu-button size="small" color="default" @click="$refs.dialog.hide()" v-show="dialogText !== '查看'">取消</vu-button>
                <vu-button size="small" color="primary" style="margin-left: 10px;" @click="submit">确定</vu-button>
            </div>
        </vu-dialog>
    </section>
</template>

<script>
import request from './request.js'
import vuRow from './vu-row.vue'
import vuCol from './vu-col.vue'
import vuInput from './vu-input.vue'
import vuSelect from './vu-select.vue'
import vuSelectOption from './vu-select-option.vue'
import vuButton from './vu-button.vue'
import vuTable from './vu-table.vue'
import vuTableColumn from './vu-table-column.vue'
import alert from './alert/index.js'
import vuDialog from './vu-dialog.vue'
import message from './message/index.js'
import vuPagination from './vu-pagination.vue'
import vuSwitch from './vu-switch.vue'
export default {
    name: 'vu-crud',
    components: {
        vuRow,
        vuCol,
        vuInput,
        vuSelect,
        vuSelectOption,
        vuButton,
        vuTable,
        vuTableColumn,
        vuDialog,
        message,
        vuPagination,
        vuSwitch
    },
    props: {
        option: Object,
        tableData: Array
    },
    data(){
        return {
            searchData: {},
            propDict: {},
            page: {
                size: 10,
                current: 1,
                total: 0
            },
            formData: {},
            dialogText: '',
            load: false,
            switchs: {},
            editIndex: 0,
            tdOption: []
        }
    },
    computed: {
        operationWidth(){
            return Object.keys(this.option.operation).length*60+20+'px'
        },
        dialogTitle(){
            if(this.dialogText === '新增'){
                return typeof this.option.buttons.add === 'string' ? this.option.buttons.add : '新增'
            }else if(this.dialogText === '编辑'){
                return typeof this.option.operation.edit === 'string' ? this.option.operation.edit : '编辑'
            }else if(this.dialogText === '查看'){
                return typeof this.option.operation.check === 'string' ? this.option.operation.check : '查看'
            }
        },
        columns(){
            let res = []
            this.option.propOption.forEach(item => {
                if(item.show !== false){
                    res.push(item)
                }
            })
            return res
        }
    },
    created(){
        this.switchsLoad()
    },
    mounted(){
        this.tdOption = this.$refs.table.getChild(this.option.propOption)
        this.loadDict()
    },
    methods: {
        async loadDict(){
            for(let prop of this.tdOption){
                if(prop.dict){
                    if(Array.isArray(prop.dict)){
                        this.propDict[prop.name] = prop.dict
                    }else if(typeof prop.dict === 'function'){
                        this.propDict[prop.name] = await prop.dict()
                    }else if(typeof prop.dict === 'string'){
                        this.propDict[prop.name] = await request(prop.dict)
                    }
                }
            }
            this.propDict = {...this.propDict}
        },
        search(){
            this.$emit('search',{...this.page},{...this.searchData})
            this.$emit('pageRefresh',{...this.page},{...this.searchData})
        },
        select(){
            this.$emit('select',this.$refs.table.getSelectData())
        },
        add(){
            this.$emit('addClick')
            if(this.option.addDialog !== false){
                this.dialogText = '新增'
                this.formData = {}
                this.$refs.dialog.show()
            }
        },
        addSubmit(){
            this.$emit('add',{...this.formData})
            this.$emit('pageRefresh',{...this.page},{...this.searchData})
        },
        del(delData){
            this.$emit('delClick',[...delData])
            window.event.stopPropagation()
            if(!delData.length){
                return
            }
            if(this.option.delAlert !== false){
                alert({
                    title: '提示',
                    content: '确定要删除吗？',
                    buttons: [
                        {
                            text: '取消',
                            type: 'default'
                        },
                        {
                            text: '确定',
                            type: 'error',
                            click: () => {
                                this.$emit('delete',[...delData])
                                this.$emit('pageRefresh',{...this.page},{...this.searchData})
                            }
                        }
                    ]
                })
            }else{
                this.$emit('delete',[...delData])
                this.$emit('pageRefresh',{...this.page},{...this.searchData})
            }
        },
        edit(data,index){
            this.$emit('editClick',{...data},index)
            window.event.stopPropagation()
            if(this.option.editDialog !== false){
                this.dialogText = '编辑'
                this.formData = {...data}
                this.editIndex = index
                this.$refs.dialog.show()
            }
        },
        editSubmit(){
            this.tableData.splice(this.editIndex,1,this.formData)
            this.$emit('edit',{...this.formData})
            this.$emit('pageRefresh',{...this.page},{...this.searchData})
        },
        check(data){
            window.event.stopPropagation()
            this.$emit('check',{...data})
            this.dialogText = '查看'
            this.formData = {...data}
            this.$refs.dialog.show()
        },
        submit(){
            if(this.dialogText === '查看'){
                this.$refs.dialog.hide()
                return
            }
            for(let prop of this.tdOption){
                if(prop.must && !this.formData[prop.name]){
                    message.warning('请填写完整')
                    return
                }
            }
            if(this.dialogText === '新增'){
                this.addSubmit()
            }else if(this.dialogText === '编辑'){
                this.editSubmit()
            }
            this.$refs.dialog.hide()
        },
        loading(bool){
            this.load = bool
        },
        switchChange(name,e){
            // localStorage.setItem(`vu-crud-switch-${name}`,e)
        },
        switchsLoad(){
             ['border','index','selection','striped'].forEach(name => {
                // if(!this.option.switch){
                //     this.switchs[name] = this.option[name]
                // }
                // else if(localStorage.getItem(`vu-crud-switch-${name}`) === 'true'){
                //     this.switchs[name] = true
                // }
                // else{
                //     this.switchs[name] = false
                // }
                this.switchs[name] = this.option[name]
            })
            this.switchs = {...this.switchs}
        },
        pageChange(){
            this.$emit('pageChange',{...this.page})
            this.$emit('pageRefresh',{...this.page},{...this.searchData})
        },
        reload(){
            this.$emit('reload',{...this.page},{...this.searchData})
            this.$emit('pageRefresh',{...this.page},{...this.searchData})
        },
        tableClick(data,index){
            this.$emit('tableClick',data,index)
        },
        setPage(current,size,total){
            if(current){
                this.page.current = current
            }
            if(size){
                this.page.size = size
            }
            if(total || total === 0){
                this.page.total = total
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.vu-crud_container{
    padding: 10px;
    overflow: hidden;
    .search-col{
        display: flex;
        align-items: center;
        .search-col-text{
            display: flex;
            justify-content: center;
            align-items: center;
            color: #606266;
            margin-right: 10px;
            font-size: 16px;
            max-width: 105px;
        }
        .search-col-input{
            flex: 1;
        }
    }
    .menu{
        .buttons{
            display: flex;
            column-gap: 10px;
            padding: 10px 0;
            align-items: center;
        }
        .switchs{
            display: flex;
            column-gap: 50px;
            padding: 10px 0;
            align-items: center;
            position: relative;
            .reload{
                position: absolute;
                right: 20px;
                top: 50%;
                transform: translateY(-50%);
                width: 28px;
                height: 28px;
                background-image: url(/vuli/reload.png);
                color: #E44258;
                border-radius: 50%;
                border: 1px solid #E44258;
                background-size: 70%;
                background-repeat: no-repeat;
                background-position: 50%;
                box-sizing: border-box;
                transition: all linear 0.1s;
                cursor: pointer;
            }
            .reload:hover{
                background-color: #ffe4e4;
            }
        }
    }

    .dialog{
        .content{
            padding: 0;
            .must{
                color: #E44258;
                font-size: 18px;
            }
        }
    }

    .pagination{
        padding:  10px 0;
    }
}
</style>