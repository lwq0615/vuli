# radio单选框

### 

#### 示例
###
<l-radio-group v-model="value">
<l-radio :value="1">福建</l-radio>
<l-radio :value="2" :disable="true">泉州</l-radio>
<l-radio :value="3" :disable="true">福州</l-radio>
<l-radio :value="4">厦门</l-radio>
<l-radio :value="5">漳州</l-radio>
</l-radio-group>

<script>
export default {
  data(){
    return {
      value: 1
    }
  }
}
</script>

#### 代码
```html
<!--l-radio-group必须与l-radio搭配使用-->
<l-radio-group v-model="value">
    <l-radio :value="1">福建</l-radio>
    <l-radio :value="2" :disable="true">泉州</l-radio>
    <l-radio :value="3" :disable="true">福州</l-radio>
    <l-radio :value="4">厦门</l-radio>
    <l-radio :value="5">漳州</l-radio>
</l-radio-group>

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

#### Radio-group Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值 | String,Number | 否 | null | -- |
| columns | 单选框每列宽度权值 | Array | 否 | [1,1,1] | -- |
| rowHeight | 单选框高度 | String | 否 | 50px | -- |
| fontSize | 单选框文字大小 | String | 否 | 14px | -- |
| iconSize | 按钮大小 | Number | 否 | 16 | -- |


#### Radio Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value | 单选框的值 | String,Number | 否 | null | -- |
| disable | 是否禁用 | Boolean | 否 | false | -- |


#### Radio-group Events
| 事件名 | 触发条件 | 参数 |
|  ---  | ---  | ---  | 
| radioClick | 点击单选框 | 单选框的value值 |
| change | 值改变 | 改变前后的值 |


#### Radio-group Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| changeValue | 选择单选框 | value  | 目标单选框的value |
| radioClick | 点击单选框 | value  | 目标单选框的value |


#### Radio Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| check | 点击单选框 | --  | -- |
