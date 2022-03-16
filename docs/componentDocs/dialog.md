# Dialog 对话框

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-button @click="show">对话框</vu-button>
    <vu-dialog ref="dialog">
      <div slot="title">提示消息</div> 
      <div slot="content">这是一个提示消息</div>
      <div slot="footer" style="text-align:right;">
        <vu-button @click="hide">确定</vu-button>
      </div>
    </vu-dialog>
</div>

<script>
export default {
  methods: {
    hide(){
        this.$refs.dialog.hide()
    },
    show(){
        this.$refs.dialog.show()
    }
  }
}
</script>

### 代码
```html
<vu-button @click="show">对话框</vu-button>

<vu-dialog ref="dialog">
    <div slot="title">提示消息</div> 
    <div slot="content">这是一个提示消息</div>
    <div slot="footer" style="text-align:right;">
        <vu-button @click="hide">确定</vu-button>
    </div>
</vu-dialog>

<script>
export default {
  methods: {
    hide(){
        this.$refs.dialog.hide()
    },
    show(){
        this.$refs.dialog.show()
    }
  }
}
</script>
```

::: tip
不要将组件作为其他定位元素的子元素
:::

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| width | 组件宽度 | String | 否 | 500px | -- |
| height | 组件高度 | String | 否 | auto | -- |
| modal | 是否需要遮罩层 | Boolean | 否 | true | -- |
| modelHide | 点击遮罩层时关闭对话框 | Boolean | 否 | true | -- |
| moveable | 对话框是否可以拖动 | Boolean | 否 | false | -- |
| esc | 按esc键关闭对话框 | Boolean | 否 | true | -- |

#### Slots
| name | 说明 |
|  ---  | ---  |
| title | 标题内容(不使用时默认标题默认为'提示') |
| content | 主体内容 |
| footer | 底部内容 |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| show | 对话框显示 | -- |
| hide | 对话框隐藏 | -- |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| show | 显示对话框 | --  | -- |
| hide | 隐藏对话框 | --  | -- |
