# Sider 滑块

#### 示例
###

默认<br>
<l-sider v-model="value1" :format="format"></l-sider>

开启但不显示间断点<br>
<l-sider v-model="value2" :step="10"></l-sider>

开启并显示间断点<br>
<l-sider v-model="value3" :step="10" :stepPoint="true"></l-sider>

<script>
export default {
  data(){
    return {
      value1: 50,
      value2: 50,
      value3: 50,
      format: function(percentage){
        return percentage+"%"
      }
    }
  }
}
</script>

#### 代码
```html
<!--可直接在style内联样式中修改组件宽高-->
默认<br>
<l-sider v-model="value" :format="format"></l-sider>

开启但不显示间断点<br>
<l-sider v-model="value" :step="10"></l-sider>

开启并显示间断点<br>
<l-sider v-model="value" :step="10" :stepPoint="true"></l-sider>

<script>
export default {
  data(){
    return {
      value: 50,
      format: function(percentage){
        return percentage+"%"
      }
    }
  }
}
</script>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值 | String,Number | 否 | -- | --|
| color | 组件颜色 | String | 否 | #E44258 | 颜色的十六进制代码 |
| iconSize | 滑块大小 | String | 否 | 13px | -- |
| format | 定义tip文本展示内容 | Function | 否 | 直接展示当前value | -- |
| tip | 鼠标移入组件时是否展示tip文本 | Boolean | 否 | true | -- |
| disable | 是否禁用 | Boolean | 否 | false |-- |
| step | 是否开启间断点 | Number | 否 | -- | 1-99 |
| stepPoint | 是否显示间断点 | Boolean | 否 | false | -- |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| change | value值改变 | 改变后的value |
| click | 点击组件 | 点击时的value |
