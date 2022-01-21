# progress进度条

### 

#### 示例
###
<l-progress :percentage="70"></l-progress>

#### 代码
```html
<l-progress :percentage="70" :format="format"></l-progress>

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

#### 示例
###
<l-progress :percentage="70" :inside="true"></l-progress>

#### 代码
```html
<l-progress :percentage="70" :inside="true"></l-progress>
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
| 事件名 | 触发条件 | 参数 |
|  ---  | ---  | ---  | 
| change | 进度发生改变 | 改变前后的百分比 |
| full | 进度达到100% |-- |
