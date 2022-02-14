# Rotate-card 翻转卡片

*正反面存放不同内容可翻转的卡片*

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <l-rotate-card ref="card" rotateTime="1s" rotateType="y" extClass="test" width="200px">
    <div slot="front">front</div>
    <div slot="back">back</div>
    </l-rotate-card>
</div>

### 代码
```html
<!-- 通过插槽在正反面插入文档 -->
<!-- 通过extClass插入的class可自定义卡片的样式 -->
<l-rotate-card ref="card" rotateTime="1s" rotateType="y" extClass="test" width="200px">
    <div slot="front">front</div>
    <div slot="back">back</div>
</l-rotate-card>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| rotateTime | 动画时间 | String | 否 | 0.7s | -- |
| width | 组件宽度 | String | 否 | 300px | -- |
| height | 组件高度 | String | 否 | 200px | -- |
| transformType | 动画类型 | String | 否 | ease | 参考transition属性 |
| extClass | 自定义卡片的class | String | 否 | -- | -- |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| rotate | 卡片翻转 | 翻转后的面 |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| rotate | 翻转卡片 | 'back'或者'front'  | 也可以不需要参数 |
