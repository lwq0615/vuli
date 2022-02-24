# Tooltip 提示

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-tooltip content="左方的tooltip" direction="left">
        <vu-button>left</vu-button>
    </vu-tooltip>
    <vu-tooltip content="上方的tooltip" direction="top">
        <vu-button>top</vu-button>
    </vu-tooltip>
    <vu-tooltip content="下方的tooltip" direction="bottom">
        <vu-button>bottom</vu-button>
    </vu-tooltip>
    <vu-tooltip content="右方的tooltip" direction="right">
        <vu-button>right</vu-button>
    </vu-tooltip>
</div>


### 代码

```html
<vu-tooltip content="左方的tooltip" direction="left">
    <vu-button>left</vu-button>
</vu-tooltip>

<vu-tooltip content="上方的tooltip" direction="top">
    <vu-button>top</vu-button>
</vu-tooltip>

<vu-tooltip content="下方的tooltip" direction="bottom">
    <vu-button>bottom</vu-button>
</vu-tooltip>

<vu-tooltip content="右方的tooltip" direction="right">
    <vu-button>right</vu-button>
</vu-tooltip>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值,是否显示tooltip | Boolean | 否 | -- | -- |
| content | 提示文字 | String | 否 | tooltip | -- |
| color | 提示框背景颜色 | String | 否 | #E44258 | 颜色代码 |
| fontColor | 提示字体颜色 | String | 否 | white | 颜色代码 |
| fontSize | 提示字体大小 | String | 否 | 13px | -- |
| direction | 提示框显示位置 | String | 否 | top | top,left,bottom,right |
| width | 提示框宽度,不填写则在一行展示所有内容 | String | 否 | -- |-- |
| disable | 是否禁用 | Boolean | 否 | false |-- |
| manual | 是否开启手动模式(开启后鼠标移入和移出不会影响提示框的显示) | Boolean | 否 | false |-- |
| enterable | 鼠标是否可移入提示框 | Boolean | 否 | true |-- |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| showTip | 显示或隐藏提示框 | Boolean | true:显示,false:隐藏 |
