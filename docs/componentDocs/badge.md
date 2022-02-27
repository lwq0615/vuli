# Badge 标记

### 示例

*文本或数字*

<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-badge text="12">
      <vu-button>按钮</vu-button>
    </vu-badge>
    <vu-badge text="0" color="primary" style="margin-left:20px;">
      <vu-button>按钮</vu-button>
    </vu-badge>
    <vu-badge text="1" color="success" style="margin-left:20px;">
      <vu-button>按钮</vu-button>
    </vu-badge>
    <vu-badge text="2" color="info" style="margin-left:20px;">
      <vu-button>按钮</vu-button>
    </vu-badge>
    <vu-badge text="3" color="warning" style="margin-left:20px;">
      <vu-button>按钮</vu-button>
    </vu-badge>
    <vu-badge text="3" color="error" style="margin-left:20px;">
      <vu-button>按钮</vu-button>
    </vu-badge>
</div>

### 代码

```html
<!-- text为''时不显示 -->
<vu-badge text="12">
    <vu-button>按钮</vu-button>
</vu-badge>
<vu-badge text="0" color="primary">
    <vu-button>按钮</vu-button>
</vu-badge>
<vu-badge text="1" color="success">
    <vu-button>按钮</vu-button>
</vu-badge>
<vu-badge text="2" color="info">
    <vu-button>按钮</vu-button>
</vu-badge>
<vu-badge text="3" color="warning">
    <vu-button>按钮</vu-button>
</vu-badge>
<vu-badge text="3" color="error">
    <vu-button>按钮</vu-button>
</vu-badge>
```

*小圆点*

<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-badge isDot>
      <vu-button>按钮</vu-button>
    </vu-badge>
</div>

### 代码

```html
<vu-badge isDot>
    <vu-button>按钮</vu-button>
</vu-badge>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| text | 标记文字 | String,Number | 否 | '' | -- |
| color | 标记背景颜色 | String | 否 | #E44258 | primary,success,info,<br>error,warning与颜色代码 |
| fontColor | 标记字体颜色 | String | 否 | white | 颜色代码 |
| fontSize | 标记字体大小 | String | 否 | 12px | -- |
| isDot | 小圆点 | Boolean | 否 | false | -- |
| show | 显示标记 | Boolean | 否 | true |-- |
