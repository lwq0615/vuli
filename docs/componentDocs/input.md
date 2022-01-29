# input输入框

### 

#### 示例
###
<l-input v-model="value"></l-input>
<l-input type="date"></l-input>

<script>
export default {
  data(){
    return {
      value: ''
    }
  }
}
</script>

#### 代码
```html
<l-input v-model="value"></l-input>
<l-input type="date"></l-input>

<script>
export default {
  data(){
    return {
      value: ''
    }
  }
}
</script>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值 | String,Number | 否 | null | -- |
| disable | 是否禁用 | Boolean | 否 | false | -- |
| placeholder | 输入框占位文本 | String | 否 | '请输入' | -- |
| maxlength | 原生属性，最大输入长度 | String,Number | 否 | -- | -- |
| minlength | 原生属性，最小输入长度 | String,Number | 否 | -- | -- |
| type | 输入框类型 | String | 否 | text | textarea或原生input的type值 |
| rows | 文本域行数，当type='textarea'时生效 | String,Number | 否 | -- | -- |
| cols | 文本域列数，当type='textarea'时生效 | String,Number | 否 | -- | -- |
| clearable | 是否可清空 | Boolean | 否 | true | -- |


#### Events
| 事件名 | 触发条件 | 参数 |
|  ---  | ---  | ---  | 
| blur | 失去焦点 | event |
| focus | 获得焦点 | event |
| change | 输入框失去焦点或用户按下回车 | event |
| input | 输入值改变 | event |
| click | 点击输入框 | event |
| clear | 点击清除按钮 | -- |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| clearValue | 清空输入值 | --  | -- |
