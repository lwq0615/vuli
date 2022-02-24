# Switch 开关

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
  <vu-switch v-model="value" :openValue="123" :closeValue="'close'"></vu-switch>
</div>

<script>
export default {
  data(){
    return {
      value: 0
    }
  }
}
</script>


### 代码
```html
<!--可直接在style内联样式中修改组件宽度-->
<vu-switch v-model="value" :openValue="123" :closeValue="'close'"></vu-switch>

<script>
export default {
  data(){
    return {
      value: 0
    }
  }
}
</script>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值 | String,Number,Boolean | 否 | false | -- |
| openColor | 打开时的颜色 | String | 否 | #E44258 | -- |
| closeColor | 关闭时的颜色 | String | 否 | #DCDFE6 | -- |
| disabled | 是否禁用 | Boolean | 否 | false | -- |
| openValue | 打开时的值 | Number,String,Boolean | 否 | true |-- |
| closeValue | 关闭时的值 | Number,String,Boolean | 否 | false |-- |
| name | input的name属性 | String | 否 | -- | -- |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| change | 状态改变 | 改变后的值 |
| click | 点击组件 | event |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| change | 打开或关闭开关 | 'open'或者'close'  | 不指定参数则为反状态 |
