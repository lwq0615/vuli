# Color 取色器

### 示例
<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
  <vu-color v-model="value"></vu-color>
</div>

<script>
export default {
  data(){
    return {
      value: '#E44258'
    }
  }
}
</script>

### 代码
```html
<!--可直接在style内联样式中修改组件宽高-->
<vu-color v-model="value"></vu-color>

<script>
export default {
  data(){
    return {
      value: '#E44258'
    }
  }
}
</script>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值 | String | 是 | -- | -- |
| name | input color元素的name属性 | String | 否 | -- | -- |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| change | 颜色改变 | 改变后的颜色 |
| click | 点击组件 | 当前的颜色 |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| checkColor | 展示取色器表盘 | --  | -- |
