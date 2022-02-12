# Input 输入框

### 

#### 示例
###

文本输入框<br>
<l-input v-model="value"></l-input>

日期选择<br>
<l-input type="date"></l-input>

时间选择<br>
<l-input type="time"></l-input>

日期时间选择<br>
<l-input type="datetime-local"></l-input>

周选择<br>
<l-input type="week"></l-input>

数量选择<br>
<l-input type="number"></l-input>

密码输入框<br>
<l-input type="password"></l-input>

搜索框<br>
<l-input type="search" :clearable="true"></l-input>

搜索按钮<br>
<l-input type="text" search="搜索"></l-input>

文本域<br>
<l-input type="textarea"></l-input>

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
<!--可直接在style内联样式中修改组件宽高-->
文本输入框<br>
<l-input v-model="value"></l-input>

日期选择<br>
<l-input type="date"></l-input>

时间选择<br>
<l-input type="time"></l-input>

日期时间选择<br>
<l-input type="datetime-local"></l-input>

周选择<br>
<l-input type="week"></l-input>

数量选择<br>
<l-input type="number"></l-input>

密码输入框<br>
<l-input type="password"></l-input>

搜索框<br>
<!-- 搜索框默认带有清空按钮 -->
<l-input type="search" :clearable="true"></l-input>

搜索按钮<br>
<l-input type="text" search="搜索"></l-input>

文本域<br>
<l-input type="textarea"></l-input>

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
| type | 输入框类型 | String | 否 | text | textarea和大多数原生input的type值 |
| rows | 文本域行数，当type='textarea'时生效 | String,Number | 否 | -- | -- |
| cols | 文本域列数，当type='textarea'时生效 | String,Number | 否 | -- | -- |
| clearable | 是否可清空 | Boolean | 否 | false | -- |
| search | 开启搜索按钮 | String | 否 | -- | 搜索框展示的文本 |
| name | input元素的name属性 | String | 否 | -- | -- |


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


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| clearValue | 清空输入值 | --  | -- |
