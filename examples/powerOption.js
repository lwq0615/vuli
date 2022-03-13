import axios from 'axios'

export default {
    // 显示复选框
    selection: true,
    // 显示索引
    index: true,
    // 显示垂直边框
    border: true,
    // 显示斑马纹
    striped: true,
    // 显示开关(开启后会将开关状态缓存在浏览器中)
    // 开关可控制selection,index,border,striped属性
    switch: true,
    // 显示刷新按钮
    reload: true,

    // 是否开启搜索
    search: true,
    // 按钮组配置
    buttons: {
        // 菜单删除按钮
        delete: '删除',
        // 菜单新增按钮
        add: '新增'
    },
    // 删除前是否弹窗提示(默认true)
    delAlert: true,

    // 表格右侧操作栏
    operation: {
        //是否可以删除记录
        delete: '删除',
        //是否允许编辑记录
        edit: '编辑',
        // 查看记录
        check: '查看'
    },

    // 分页器每页条数
    paginationSizeList: [5,10,20,30,50,100],
    // 分页器配置，参考Pagination组件elements属性
    paginationElements: "last,current,next,size,goto,sizeText,total",
    propOption: [
        {
            // 从tableData中读取数据的key
            name: "date",
            // 表格头展示的值
            label: "日期",
            // 表格中的宽度
            width: "180px",
            // 新增时允许定义该字段(默认false)
            add: true,
            // 编辑时允许修改字段(默认false)
            edit: true,
            // 开启搜索(默认false)
            search: true,
            // 搜索框宽度,最大为24
            span: 6,
            // 必填(默认false)
            must: true,
            // 单元格内容位置（默认center，可选left，right，center）
            align: 'left',
            // 输入时是否可以清空
            clear: true,
            // 是否在表格内展示该字段（默认true）
            show: true
        },
        {
            name: "name",
            label: "姓名",
            width: "180px",
            add: true,
            type: "select",
            // dict: function(){
            //     return axios.get('http://localhost:8082/').then(res => {
            //         return res.data
            //     })
            // },
            dict: 'http://localhost:8082/',
            edit: true,
            search: true
        },
        {
            label: "位置",
            width: "180px",
            add: true,
            edit: true,
            search: true,
            children: [
                {
                    // 表格头展示的值
                    label: "城市",
                    // 表格中的宽度
                    width: "180px",
                    // 新增时允许定义该字段(默认false)
                    add: true,
                    // 编辑时允许修改字段(默认false)
                    edit: true,
                    // 开启搜索(默认false)
                    search: true,
                    // 搜索框宽度,最大为24
                    span: 6,
                    // 必填(默认false)
                    must: true,
                    // 单元格内容位置（默认center，可选left，right，center）
                    align: 'left',
                    children: [
                        {
                            name: "zip",
                            // 表格头展示的值
                            label: "邮编",
                            // 表格中的宽度
                            width: "180px",
                            // 新增时允许定义该字段(默认false)
                            add: true,
                            // 编辑时允许修改字段(默认false)
                            edit: true,
                            // 开启搜索(默认false)
                            search: true,
                            // 搜索框宽度,最大为24
                            span: 6,
                            // 必填(默认false)
                            must: true,
                            // 单元格内容位置（默认center，可选left，right，center）
                            align: 'left'
                        }
                    ]
                },
                {
                    name: "city",
                    // 表格头展示的值
                    label: "区域",
                    // 表格中的宽度
                    width: "180px",
                    // 新增时允许定义该字段(默认false)
                    add: true,
                    // 编辑时允许修改字段(默认false)
                    edit: true,
                    // 开启搜索(默认false)
                    search: true,
                    // 搜索框宽度,最大为24
                    span: 6,
                    // 必填(默认false)
                    must: true,
                    // 单元格内容位置（默认center，可选left，right，center）
                    align: 'left'
                }
            ]
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
            search: true
        }
    ]
}