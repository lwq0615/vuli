# Slide 轮播图

*无限循环的轮播图*

#### 示例
###
<l-slide :imgs="['/luck-ui/2.jpg','/luck-ui/1.JPG','/luck-ui/3.jpg']"></l-slide>

#### 代码
```html
<l-slide :imgs="['/luck-ui/1.JPG','/luck-ui/2.jpg','/luck-ui/3.jpg']"></l-slide>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| imgs | 图片资源路径 | Array | 是 | -- | -- |
| width | 组件宽度 | String | 否 | 400px | -- |
| height | 组件高度 | String | 否 | 250px | -- |
| cutType | 图片裁剪方式 | String | 否 | cover | 参考object-fit属性 |
| time | 过渡动画时长 | String | 否 | 1s | -- |
| auto | 是否自动切换 | Number | 否 | 0 | 单位为毫秒 |
| showBtn | 是否显示切换按钮 | Boolean | 否 | true |-- |


#### Events
| 事件名 | 触发条件 | 参数 |
|  ---  | ---  | ---  | 
| next | 点击下一张按钮 | 改变前后的图片 |
| last | 点击上一张按钮 | 改变前后的图片 |
| change | 图片发生改变 | 改变前后的图片 |
| imgClick | 点击图片 | 点击的图片 |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| next | 切换下一张图片 | --  | -- |
| last | 切换上一张图片 | -- | -- |
