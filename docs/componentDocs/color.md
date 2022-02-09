# Color 取色器

### 

#### 示例
###
<l-color v-model="value"></l-color>

<script>
export default {
  data(){
    return {
      value: 'black'
    }
  }
}
</script>

#### 代码
```html
<l-color v-model="value"></l-color>

<script>
export default {
  data(){
    return {
      value: 'black'
    }
  }
}
</script>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值 | String | 否 | #fff | -- |
| name | input color元素的name属性 | String | 否 | -- | -- |


#### Events
| 事件名 | 触发条件 | 参数 |
|  ---  | ---  | ---  | 
| change | 颜色改变 | 改变后的颜色 |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| checkColor | 展示取色器表盘 | --  | -- |
