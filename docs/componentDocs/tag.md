# Tag 标签

#### 示例
###

不同大小<br>
<l-tag size="mini" color="primary">标签</l-tag>
<l-tag size="small" color="primary">标签</l-tag>
<l-tag size="default" color="primary">标签</l-tag>
<l-tag size="big" color="primary">标签</l-tag>

不同样式<br>
<l-tag type="dark">标签</l-tag>
<l-tag type="light">标签</l-tag>
<l-tag type="plain">标签</l-tag>

不同颜色<br>
<l-tag color="primary">标签</l-tag>
<l-tag color="success">标签</l-tag>
<l-tag color="info">标签</l-tag>
<l-tag color="error">标签</l-tag>
<l-tag color="warning">标签</l-tag>

带有关闭按钮<br>
<l-tag :close="true">标签</l-tag>

#### 代码
```html
不同大小<br>
<l-tag size="mini" color="primary">标签</l-tag>
<l-tag size="small" color="primary">标签</l-tag>
<l-tag size="default" color="primary">标签</l-tag>
<l-tag size="big" color="primary">标签</l-tag>

不同样式<br>
<l-tag type="dark">标签</l-tag>
<l-tag type="light">标签</l-tag>
<l-tag type="plain">标签</l-tag>

不同颜色<br>
<l-tag color="primary">标签</l-tag>
<l-tag color="success">标签</l-tag>
<l-tag color="info">标签</l-tag>
<l-tag color="error">标签</l-tag>
<l-tag color="warning">标签</l-tag>

带有关闭按钮<br>
<l-tag :close="true">标签</l-tag>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| type | 样式类型 | Struing | 否 | light | dark,light,plain |
| color | 颜色 | String | 否 | primary | primary,success,info,error,warning和颜色的十六进制代码 |
| close | 是否显示关闭按钮 | Boolean | 否 | false | -- |
| size | 标签大小 | String | 否 | default | mini,small,default,big |
| value | 标签的值 | Any | 否 | -- | -- |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| close | 点击关闭按钮 | 标签的value值 |
| click | 点击标签 | event |
