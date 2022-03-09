# Crud组件

*Crud表格组件可以快速的生成一个具备增删改查，搜索，分页等功能的表格，组件中的配置全部交由option属性管理,并通过组件的事件刷新数据*

### 示例

<br>

<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-crud 
    :option="option"
    @reload="event('reload')"
    @search="event('search')"
    @add="event('add')"
    @delete="event('delete')"
    @edit="event('edit')"
    @pageChange="event('pageChange')"
    @tableClick="event('tableClick')"
    :tableData="tableData"></vu-crud>
</div>

<script>
import message from '../.vuepress/components/message/index.js'
export default {
  data(){
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      option: {
        selection: true,
        index: true,
        border: true,
        striped: true,
        switch: true,
        reload: true,
        search: true,
        buttons: {
            delete: '删除',
            add: '新增'
        },
        delAlert: true,
        operation: {
            delete: '删除',
            edit: '编辑',
            check: '查看'
        },
        paginationSizeList: [5,10,20,30,50,100],
        paginationElements: "last,current,next,size,goto,sizeText,total",
        propOption: [
            {
                name: "date",
                label: "日期",
                width: "180px",
                add: true,
                edit: true,
                search: true,
                span: 8,
                must: true,
                align: 'left'
            },
            {
                label: "位置",
                width: "180px",
                children: [
                    {
                        name: 'zip',
                        label: "邮编",
                        width: "180px",
                        align: 'left'
                    },
                    {
                        name: "city",
                        label: "区域",
                        width: "180px",
                        add: true,
                        edit: true,
                        search: true,
                        span: 8,
                        must: true,
                        align: 'left'
                    }
                ]
            },
            {
                name: "name",
                label: "姓名",
                width: "180px",
                add: true,
                span: 8,
                type: "select",
                dict: [
                    {
                        label: '王小虎',
                        value: '王小虎'
                    },
                    {
                        label: '王小虎2',
                        value: '王小虎2'
                    },
                    {
                        label: '王小虎3',
                        value: '王小虎3'
                    }
                ],
                edit: true,
                search: true
            },
            {
                name: "province",
                label: "省市",
                width: "180px",
                type: "icon",
                add: true,
                edit: true
            },
            {
                name: "address",
                label: "地址",
                width: "200px",
                add: true,
                edit: true,
                span: 8,
                search: true
            }
        ]
      }
    }
  },
  methods: {
      event(name){
          message('触发了'+name+'事件')
      }
  }
}
</script>

<br>

### 代码
```html
<vu-crud 
:option="option"
:tableData="tableData"
@reload="event('reload')"
@search="event('search')"
@add="event('add')"
@delete="event('delete')"
@edit="event('edit')"
@pageChange="event('pageChange')"
@tableClick="event('tableClick')"></vu-crud>

<script>
import option from '/vuli/option.js'
export default {
  data(){
    return {
      tableOption,
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
    }
  },
  methods: {
    event(name){
    this.$message('触发了'+name+'事件')
    }
  }
}
</script>
```

### option.js

```javascript
import axios from 'axios'

export default {
    selection: true,
    index: true,
    border: true,
    striped: true,
    switch: true,
    reload: true,
    search: true,
    buttons: {
        delete: '删除',
        add: '新增'
    },
    delAlert: true,
    operation: {
        delete: '删除',
        edit: '编辑',
        check: '查看'
    },
    paginationSizeList: [5,10,20,30,50,100],
    paginationElements: "last,current,next,size,goto,sizeText,total",
    
    propOption: [
        {
            name: "date",
            label: "日期",
            width: "180px",
            add: true,
            edit: true,
            search: true,
            span: 8,
            must: true,
            align: 'left'
        },
        {
            label: "位置",
            width: "180px",
            children: [
                {
                    name: 'zip',
                    label: "邮编",
                    width: "180px",
                    align: 'left',
                    children: [...]
                },
                {
                    name: "city",
                    label: "区域",
                    width: "180px",
                    add: true,
                    edit: true,
                    search: true,
                    span: 8,
                    must: true,
                    align: 'left'
                }
            ]
        },
        {
            name: "name",
            label: "姓名",
            width: "180px",
            add: true,
            span: 8,
            type: "select",
            dict: [
                {
                    label: '王小虎',
                    value: '王小虎'
                },
                {
                    label: '王小虎2',
                    value: '王小虎2'
                },
                {
                    label: '王小虎3',
                    value: '王小虎3'
                }
            ],
            edit: true,
            search: true
        },
        {
            name: "province",
            label: "省市",
            width: "180px",
            type: "icon",
            add: true,
            edit: true
        },
        {
            name: "address",
            label: "地址",
            width: "200px",
            add: true,
            edit: true,
            span: 8,
            search: true
        }
    ]
}
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| option | 表格配置 | Object | 是 | null | 具体配置查看option配置项 |
| tableData | 表格数据 | Array | 是 | null | -- |

#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| pageRefresh | 所有可能需要刷新表格数据的操作都会触发该事件 | 分页数据，搜索框数据 |
| search | 点击搜索按钮 | 分页数据，搜索框数据 |
| select | 表格选中数据改变 | 选中的数据 |
| add | 提交新增时触发 | 新增的数据信息 |
| delete | 提交删除时触发 | 删除的数据 |
| edit | 提交编辑时触发 | 编辑的数据信息 |
| pageChange | 分页器状态发生改变 |分页器信息 |
| reload | 点击刷新按钮 | 分页数据，搜索框数据 |
| tableClick | 剪辑表格数据项 | 点击的数据，该数据的index |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| loading | 表格加载中 | Boolean  | true:表格进入加载状态,false:加载状态结束 |

#### option配置项
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| selection | 显示表格复选框 | Boolean | 否 | false | -- |
| index | 显示表格记录索引 | Boolean | 否 | false | -- |
| border | 显示表格垂直边框 | Boolean | 否 | false | -- |
| striped | 显示表格斑马纹 | Boolean | 否 | false | -- |
| switch | 显示开关(开启后<br>会将开关状态缓存在浏览器中),开关可控制selection,index,<br>border,striped属性 | Boolean | 否 | false | -- |
| reload | 显示刷新按钮 | Boolean | 否 | false | -- |
| search | 是否开启搜索功能 | Boolean | 否 | false | -- |
| buttons | 表格上方按钮组配置 | Object | 否 | null |具体配置查看buttons配置项|
| operation | 表格右侧操作栏配置 | Object | 否 | null | 具体配置查看operation配置项 |
| delAlert | 删除前是否弹窗提示 | Boolean | 否 | true | -- |
| paginationSizeList | 分页器每页条数配置 | Array | 否 | [10,20,50,100] | -- |
| paginationElements | 分页器配置 | String | 否 | last,current,<br>next,size,total | 参考Pagination组件elements属性 |
| propOption | 表格字段配置 | Array | 是 | null | 具体配置查看propOption配置项 |


#### buttons配置项
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| delete | 菜单删除按钮 | Boolean,String | 否 | false | true:显示,false:隐藏，也可以以自定义文本作为按钮文本 |
| add | 菜单新增按钮 | Boolean,String | 否 | false | true:显示,false:隐藏，也可以以自定义文本作为按钮文本 |


#### operation配置项
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| delete | 是否显示删除按钮 | Boolean,String | 否 | false | true:显示,false:隐藏，也可以以自定义文本作为按钮文本 |
| edit | 是否显示编辑按钮  | Boolean,String | 否 | false | true:显示,false:隐藏，也可以以自定义文本作为按钮文本 |
| check | 是否显示查看按钮  | Boolean,String | 否 | false | true:显示,false:隐藏，也可以以自定义文本作为按钮文本 |


#### propOption配置项
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| name | 从tableData中读取数据的key,该属性不可重复 | String | 否 | -- | -- |
| label | 表格头展示的文本 | String | 是 | -- | -- |
| width | 表格列的宽度 | String | 否 | auto | -- |
| add | 新增时允许定义该字段 | Boolean | 否 | false | -- |
| edit | 编辑时允许修改字段 | Boolean | 否 | false | -- |
| search | 开启搜索 | Boolean | 否 | false | -- |
| span | 搜索框宽度 | Number | 否 | 6 | 0-24 |
| must | 该字段是否必填,必填时在新增与编辑提交时会进行校验 | Boolean | 否 | false | -- |
| align | 单元格内容位置 | String | 否 | center | left，right，center |
| children | 配置多级表头，最多支持三级表头 | Array | 否 | -- | 与propOption配置相同 |
| type | 字段类型，为select时搜索与新增编辑时展示为下拉框并且必须配置对应dict字典 | String | 否 | input | select,input |
| dict | 字段字典配置 | Array,String,Function | type='select' 时必填 | -- | 具体查看dict的三种配置方式 |


#### dict的三种配置方式
```javascript
// 1.直接配置Array,value为String或Number类型
dict: [
    {
        label: '王小虎',
        value: '1'
    },
    {
        label: '王小虎2',
        value: '2'
    },
    {
        label: '王小虎3',
        value: '3'
    }
]

// 2.提供后端请求接口，接口返回参数格式参考第一种方式
dict: 'http://localhost:8082/'

// 3.如果请求的后台需要权限验证等复杂处理，可以自定义一个方法来返回需要的参数
// 接口返回参数格式参考第一种方式
dict: function(){
    return axios.get('http://localhost:8082/').then(res => {
        return res.data
    })
}
```
