# Checkbox 复选框

### 

#### 示例
###
<l-checkbox-group v-model="value">
<l-checkbox value="1">福建</l-checkbox>
<l-checkbox value="2">厦门</l-checkbox>
<l-checkbox value="3">漳浦</l-checkbox>
<l-checkbox value="4">泉州</l-checkbox>
</l-checkbox-group>

<script>
export default {
  data(){
    return {
      value: []
    }
  }
}
</script>

#### 代码
```html
<!--l-checkbox-group必须与l-checkbox搭配使用-->
<l-checkbox-group v-model="value">
  <l-checkbox value="1">福建</l-checkbox>
  <l-checkbox value="2">厦门</l-checkbox>
  <l-checkbox value="3">漳浦</l-checkbox>
  <l-checkbox value="4">泉州</l-checkbox>
</l-checkbox-group>

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

#### Radio-group Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值 | Array | 否 | [] | -- |
| columns | 单选框每列宽度权值 | Array | 否 | [1,1,1] | -- |
| rowHeight | 单选框高度 | String | 否 | 50px | -- |
| fontSize | 单选框文字大小 | String | 否 | 14px | -- |
| iconSize | 按钮大小 | Number | 否 | 16 | -- |
| name | input checkbox元素的name属性 | String | 否 | -- | -- |


#### Radio Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value | 单选框的值 | String,Number | 否 | null | -- |
| disable | 是否禁用 | Boolean | 否 | false | -- |


#### Radio-group Events
| 事件名 | 触发条件 | 参数 |
|  ---  | ---  | ---  | 
| checkboxClick | 点击复选框 | 复选框的value值 |
| change | 值改变 | 改变后的值 |


#### Radio Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| check | 点击单选框 | --  | -- |
