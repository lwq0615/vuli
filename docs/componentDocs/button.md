# Button 按钮

*可作为form表单submit按钮使用*

#### 示例
###

small<br>
<l-button size="small">按钮</l-button>
<l-button size="small" color="primary">按钮</l-button>

default<br>
<l-button size="default" color="success">按钮</l-button>
<l-button color="info">按钮</l-button>

big<br>
<l-button size="big" color="warning">按钮</l-button>
<l-button size="big" color="error">按钮</l-button>

#### 代码
```html
<!--可直接在style内联样式中修改组件宽高,字体颜色等-->
small<br>
<l-button size="small">按钮</l-button>
<l-button size="small" color="primary">按钮</l-button>

default<br>
<l-button size="default" color="success">按钮</l-button>
<l-button color="info">按钮</l-button>

big<br>
<l-button size="big" color="warning">按钮</l-button>
<l-button size="big" color="error">按钮</l-button>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| color | 按钮背景色 | String | 否 | #E44258 | -- |
| size | 按钮大小 | String | 否 | default | small,default,big |

#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| click | 点击按钮 | event |

