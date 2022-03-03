# Checkbox 复选框

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
  <vu-checkbox-group :value="value" :columns="[1,1,1]">
    <vu-checkbox :all="true">全选</vu-checkbox>
    <vu-checkbox value="1">福建</vu-checkbox>
    <vu-checkbox value="2">厦门</vu-checkbox>
    <vu-checkbox value="3">漳浦</vu-checkbox>
    <vu-checkbox value="4">泉州</vu-checkbox>
  </vu-checkbox-group>
</div>

<script>
export default {
  data(){
    return {
      value: []
    }
  }
}
</script>

### 代码
```html
<!--vu-checkbox-group必须与vu-checkbox搭配使用-->
<!-- 可直接通过style内联样式修改组件宽高 -->
<!-- 当columns为Array时(例如[1,1,1]),复选框会分为三列，每列宽度比为1:1:1 -->
<!-- 当columns为String时(默认为'100px'),复选框每列宽度为100px,直至排放不下时自动换行 -->
<vu-checkbox-group :value="value" :columns="[1,1,1]">
  <!-- 将复选框标记为全选按钮会使该复选框独占一行 -->
  <vu-checkbox :all="true">全选</vu-checkbox>
  <vu-checkbox value="1">福建</vu-checkbox>
  <vu-checkbox value="2">厦门</vu-checkbox>
  <vu-checkbox value="3">漳浦</vu-checkbox>
  <vu-checkbox value="4">泉州</vu-checkbox>
</vu-checkbox-group>

<script>
export default {
  data(){
    return {
      value: []
    }
  }
}
</script>
```

#### Checkbox-group Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值 | Array | 是 | -- | -- |
| columns | 单选框每列宽度权值 | Array,String | 否 | 100px | -- |
| rowHeight | 单选框高度 | String | 否 | 50px | -- |
| fontSize | 单选框文字大小 | String | 否 | 14px | -- |
| iconSize | 按钮大小 | Number | 否 | 16 | -- |
| name | input checkbox元素的name属性 | String | 否 | -- | -- |
| justify | 复选框在每列的位置 | String | 否 | left | left,center,right |


#### Checkbox Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value | 单选框的值 | String,Number | 否 | -- | -- |
| disable | 是否禁用 | Boolean | 否 | false | -- |
| all | 是否将该复选框作为全选按钮(是的话该复选框的value将失效) | Boolean | 否 | false | -- |


#### Checkbox-group Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| change | 值改变 | 改变后的值 |


#### Checkbox Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| click | 点击复选框 | 复选框的value值 |


#### Checkbox-group Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| checkAll | 全选(不包含禁用的复选框) | --  | -- |
| allFlg | 返回当前是否全选 | disable | Boolean类型,为true时不计算禁用的复选框 |


#### Checkbox Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| check | 点击复选框 | --  | -- |
