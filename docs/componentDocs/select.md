# select 下拉框

### 

#### 示例
###
<l-select
    :options="[{label:'泉州',value:1},{label:'漳州',value:2}]"
    :openSearch="true"
></l-select>

###
###
#### 代码
```html
<l-select
    :options="[{label:'泉州',value:1},{label:'漳州',value:2}]"
    v-model="value"
    :openSearch="false"
></l-select>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值 | String,Number | 否 | -- | --|
| options | 下拉框列表 | Array | 是 | null | --|
| width | 组件宽度 | String | 否 | 200px | --|
| deleteBtn | 是否显示清空按钮 | Boolean | 否 | true | -- |
| openSearch | 是否开启搜索 | Boolean | 否 | true | --|
| disable | 是否禁用 | Boolean | 否 | false | -- |


#### Events
| 事件名 | 触发条件 | 参数 |
|  ---  | ---  | ---  | 
| change | 下拉框值改变 | 改变前后的值 |

