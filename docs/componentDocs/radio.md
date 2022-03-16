# Radio 单选框

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
  <vu-radio-group v-model="value" :columns=[1,1,1]>
  <vu-radio :value="1">福建</vu-radio>
  <vu-radio :value="2" :disable="true">泉州</vu-radio>
  <vu-radio :value="3" :disable="true">福州</vu-radio>
  <vu-radio :value="4">厦门</vu-radio>
  <vu-radio :value="5">漳州</vu-radio>
  </vu-radio-group>
</div>

<script>
export default {
  data(){
    return {
      value: 1
    }
  }
}
</script>

### 代码
```html
<!--vu-radio-group必须与vu-radio搭配使用-->
<!-- 可直接通过style内联样式修改组件宽高 -->
<!-- 当columns为Array时(例如[1,1,1]),复选框会分为三列，每列宽度比为1:1:1 -->
<!-- 当columns为String时(默认为'100px'),复选框每列宽度为100px,直至排放不下时自动换行 -->
<vu-radio-group v-model="value" :columns=[1,1,1]>
    <vu-radio :value="1">福建</vu-radio>
    <vu-radio :value="2" :disable="true">泉州</vu-radio>
    <vu-radio :value="3" :disable="true">福州</vu-radio>
    <vu-radio :value="4">厦门</vu-radio>
    <vu-radio :value="5">漳州</vu-radio>
</vu-radio-group>

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
<br>

::: tip
grid属性为false时，columns，rowHeight，justify属性不生效
:::

#### Radio-group Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值 | String,Number | 是 | -- | -- |
| fontSize | 单选框文字大小 | String | 否 | 14px | -- |
| iconSize | 按钮大小 | Number | 否 | 16 | -- |
| name | input radio元素的name属性 | String | 否 | -- | -- |
| required | 是否必填 | Boolean | 否 | false | -- |
| grid | 开启grid布局模式 | Boolean | 否 | true | -- |
| columns | 单选框每列宽度权值 | Array,String | 否 | 100px | -- |
| rowHeight | 单选框高度 | String | 否 | 50px | -- |
| justify | 复选框在每列的位置 | String | 否 | left | left,center,right |


#### Radio Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value | 单选框的值 | String,Number,Boolean | 否 | null | -- |
| disable | 是否禁用 | Boolean | 否 | false | -- |


#### Radio-group Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| change | 值改变 | 改变后的值 |
| invalid | 提交值无效 | event |


#### Radio Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| click | 点击单选框 | 单选框的value值 |


#### Radio-group Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| changeValue | 选择单选框 | value  | 目标单选框的value |


#### Radio Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| check | 点击单选框 | --  | -- |
