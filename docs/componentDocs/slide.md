# Slide 轮播图

*无限循环的轮播图*

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-slide :imgs="['/vuli/2.jpg','/vuli/1.jpg','/vuli/3.jpg']"></vu-slide>
</div>

### 代码
```html
<!--可直接在style内联样式中修改组件宽高-->
<vu-slide :imgs="['/vuli/1.jpg','/vuli/2.jpg','/vuli/3.jpg']"></vu-slide>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| imgs | 图片资源路径 | Array | 是 | -- | -- |
| cutType | 图片裁剪方式 | String | 否 | cover | 参考object-fit属性 |
| time | 过渡动画时长 | String | 否 | 0.5s | -- |
| auto | 是否自动切换 | Number | 否 | 0 | 单位为毫秒 |
| showBtn | 是否显示切换按钮 | Boolean | 否 | true |-- |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| next | 点击下一张按钮 | 改变后的图片 |
| last | 点击上一张按钮 | 改变后的图片 |
| change | 图片发生改变 | 改变后的图片 |
| imgClick | 点击图片 | 点击的图片 |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| next | 切换下一张图片 | --  | -- |
| last | 切换上一张图片 | -- | -- |
