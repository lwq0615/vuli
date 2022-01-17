# select

### 下拉框

#### 示例
<l-select
    :options="[{label:'李伟强',value:1},{label:'李伟强2',value:2}]"
    :openSearch="false"
></l-select>

#### 代码
```vue
<l-select
    :options="[{label:'李伟强',value:1},{label:'李伟强2',value:2}]"
    v-model="value"
    :openSearch="false"
></l-select>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| options | 下拉框列表 | Array | 是 | null | --|
| value / v-model | 绑定值 | -- | 否 | -- | --|
| width | 组件宽度 | String | 否 | 200px | --|
| deleteBtn | 是否显示清空按钮 | Boolean | 否 | true | -- |
| openSearch | 是否开启搜索 | Boolean | 否 | true | --|
| disable | 是否禁用 | Boolean | 否 | false | -- |


#### Events
| 事件名 | 触发条件 | 参数 |
|  ---  | ---  | ---  | 
| change | 下拉框值改变 | 选中的value |

