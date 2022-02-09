# Switch 开关

### 

#### 示例
###
<l-switch v-model="value" :openValue="123" :closeValue="'close'"></l-switch>

<script>
export default {
  data(){
    return {
      value: 0
    }
  }
}
</script>


#### 代码
```html
<l-switch v-model="value" :openValue="123" :closeValue="'close'"></l-switch>

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


#### Events
| 事件名 | 触发条件 | 参数 |
|  ---  | ---  | ---  | 
| change | 状态改变 | 改变后的值 |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| change | 打开或关闭开关 | 'open'或者'close'  | 不指定参数则为反状态 |
