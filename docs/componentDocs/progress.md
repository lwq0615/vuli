# Progress 进度条

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
  outside<br>
  <l-progress :percentage="70"></l-progress><br><br>
  inside<br>
  <l-progress :percentage="70" :inside="true"></l-progress>
</div>

### 代码
```html
<!--可直接在style内联样式中修改组件宽高-->
outside<br>
<l-progress :percentage="70"></l-progress>

inside<br>
<l-progress :percentage="70" :inside="true"></l-progress>

<script>
export default {
  methods: {
    //组件可以通过format属性自定义展示文本
    //percentage为当前百分比
    format(percentage){
        return percentage === 100 ? '满' : `${percentage}%`
    }
  }
}
</script>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| percentage | 百分比 | Number | 否 | 0 | 0-100 |
| color | 进度条颜色 | String | 否 | #e44258 | -- |
| format | 右侧文本 | Function | 否 | 直接展示百分比 | -- |
| textColor | 右侧文本颜色 | String | 否 | #606266,white | -- |
| inside | 文本是否在进度条内展示 | Boolean | 否 | false | -- |
| showText | 是否展示文本 | Boolean | 否 | true | -- |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| change | 进度发生改变 | 改变后的百分比 |
| full | 进度达到100% |-- |
| click | 点击组件 | event |
