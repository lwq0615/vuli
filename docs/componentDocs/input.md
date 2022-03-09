# Input 输入框

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
  文本输入框<br>
  <vu-input v-model="value1"></vu-input><br><br>
  日期选择<br>
  <vu-input v-model="value2" type="date"></vu-input><br><br>
  时间选择<br>
  <vu-input v-model="value3" type="time"></vu-input><br><br>
  日期时间选择<br>
  <vu-input v-model="value4" type="datetime-local"></vu-input><br><br>
  周选择<br>
  <vu-input v-model="value5" type="week"></vu-input><br><br>
  数量选择<br>
  <vu-input v-model="value6" type="number"></vu-input><br><br>
  密码输入框<br>
  <vu-input v-model="value7" type="password"></vu-input><br><br>
  搜索框<br>
  <vu-input v-model="value8" type="search"></vu-input><br><br>
  搜索按钮<br>
  <vu-input v-model="value9" type="text" search="搜索"></vu-input><br><br>
  文本域<br>
  <vu-input v-model="value10" type="textarea"></vu-input>
</div>

<script>
export default {
  data(){
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: ''
    }
  }
}
</script>

### 代码
```html
<!--可直接在style内联样式中修改组件宽高-->
文本输入框<br>
<vu-input v-model="value1"></vu-input>

日期选择<br>
<vu-input v-model="value2" type="date"></vu-input>

时间选择<br>
<vu-input v-model="value3" type="time"></vu-input>

日期时间选择<br>
<vu-input v-model="value4" type="datetime-local"></vu-input>

周选择<br>
<vu-input v-model="value5" type="week"></vu-input>

数量选择<br>
<vu-input v-model="value6" type="number"></vu-input>

密码输入框<br>
<vu-input v-model="value7" type="password"></vu-input>

搜索框<br>
<!-- 搜索框默认带有清空按钮,此时clearable属性不再生效 -->
<vu-input v-model="value8" type="search"></vu-input>

搜索按钮<br>
<vu-input v-model="value9" type="text" search="搜索"></vu-input>

文本域<br>
<vu-input v-model="value10" type="textarea"></vu-input>

<script>
export default {
  data(){
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: ''
    }
  }
}
</script>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值 | String,Number | 是 | -- | -- |
| disable | 是否禁用 | Boolean | 否 | false | -- |
| readonly | 是否只读 | Boolean | 否 | false | -- |
| placeholder | 输入框占位文本 | String | 否 | '请输入' | -- |
| maxlength | 原生属性，最大输入长度 | String,Number | 否 | -- | -- |
| minlength | 原生属性，最小输入长度 | String,Number | 否 | -- | -- |
| type | 输入框类型 | String | 否 | text | textarea和大多数原生input的type值 |
| rows | 文本域行数，当type='textarea'时生效 | String,Number | 否 | -- | -- |
| cols | 文本域列数，当type='textarea'时生效 | String,Number | 否 | -- | -- |
| clearable | 是否可清空 | Boolean | 否 | false | -- |
| search | 开启搜索按钮 | String | 否 | -- | 搜索框展示的文本 |
| name | input元素的name属性 | String | 否 | -- | -- |
| required | 是否必填 | Boolean | 否 | false | -- |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| blur | 失去焦点 | event |
| focus | 获得焦点 | event |
| change | 输入框失去焦点或用户按下回车 | event |
| input | 输入值改变 | event |
| click | 点击输入框 | event |
| search | 点击搜索按钮 | 输入框的value |
| clear | 点击清除按钮 | -- |
| invalid | 提交值无效 | event |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| clearValue | 清空输入值 | --  | -- |
