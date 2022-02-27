# Button 按钮

### 示例

*small*
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-button size="small">按钮</vu-button>
    <vu-button size="small" color="primary">按钮</vu-button>
</div>

*default*
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-button size="default" color="success">按钮</vu-button>
    <vu-button color="info">按钮</vu-button>
</div>

*big*
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-button size="big" color="warning">按钮</vu-button>
    <vu-button size="big" color="error">按钮</vu-button>
</div>

### 代码
```html
<!--可直接在style内联样式中修改组件宽高,字体颜色等-->
small
<vu-button size="small">按钮</vu-button>
<vu-button size="small" color="primary">按钮</vu-button>

default
<vu-button size="default" color="success">按钮</vu-button>
<vu-button color="info">按钮</vu-button>

big
<vu-button size="big" color="warning">按钮</vu-button>
<vu-button size="big" color="error">按钮</vu-button>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| color | 按钮背景色 | String | 否 | #E44258 | primary,success,info,error,warning<br>与颜色代码 |
| size | 按钮大小 | String | 否 | default | small,default,big |

#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| click | 点击按钮 | event |

