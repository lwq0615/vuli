# Select 下拉框

### 

#### 示例
###
<l-select v-model="value">
<l-select-option label="福建" :value="1"></l-select-option>
<l-select-option label="漳州" :value="2"></l-select-option>
<l-select-option label="漳浦" :value="3"></l-select-option>
<l-select-option label="厦门" :value="4"></l-select-option>
<l-select-option label="泉州" :value="5"></l-select-option>
<l-select-option label="三明" :value="6"></l-select-option>
<l-select-option label="龙岩" :value="7"></l-select-option>
</l-select>

<script>
export default {
  data(){
    return {
      value: 1
    }
  }
}
</script>

###
###
#### 代码
```html
<l-select v-model="value">
    <l-select-option label="福建" :value="1"></l-select-option>
    <l-select-option label="漳州" :value="2"></l-select-option>
    <l-select-option label="漳浦" :value="3"></l-select-option>
    <l-select-option label="厦门" :value="4"></l-select-option>
    <l-select-option label="泉州" :value="5"></l-select-option>
    <l-select-option label="三明" :value="6"></l-select-option>
    <l-select-option label="龙岩" :value="7"></l-select-option>
</l-select>

<script>
export default {
  data(){
    return {
      value: 1
    }
  }
}
</script>
```

#### Select Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值 | String,Number | 否 | -- | --|
| width | 组件宽度 | String | 否 | 200px | --|
| deleteBtn | 是否显示清空按钮 | Boolean | 否 | true | -- |
| openSearch | 是否开启搜索 | Boolean | 否 | true | --|
| disable | 是否禁用 | Boolean | 否 | false | -- |
| name | select元素的name属性 | String | 否 | -- | -- |


#### Option Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value | option的值 | String,Number | 是 | -- | --|
| label | option展示的文本 | String,Number  | 是 | -- | --|


#### Events
| 事件名 | 触发条件 | 参数 |
|  ---  | ---  | ---  | 
| change | 下拉框值改变 | 改变前后的值 |

