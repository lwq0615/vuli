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
<!--可直接在style内联样式中修改组件宽高-->
<!--l-select必须与l-select-option搭配使用-->
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
| deleteBtn | 是否显示清空按钮 | Boolean | 否 | true | -- |
| openSearch | 是否开启搜索 | Boolean | 否 | true | --|
| disable | 是否禁用 | Boolean | 否 | false | -- |
| name | select元素的name属性 | String | 否 | -- | -- |


#### Option Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value | option的值 | String,Number | 是 | -- | --|
| label | option展示的文本 | String,Number  | 是 | -- | --|


#### Select Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| click | 点击输入框 | -- |
| change | 下拉框值改变 | 改变后的值 |
| open | 下拉框打开 | -- |
| close | 下拉框关闭 | -- |
| clear | 点击清空按钮 | -- |


#### Option Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| click | 点击选项 | option的value和label |

