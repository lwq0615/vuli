# Layout 布局

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    基础使用
    <vu-row>
        <vu-col :span="8">
            <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
        </vu-col>
        <vu-col :span="8">
            <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
        </vu-col>
        <vu-col :span="8">
            <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
        </vu-col>
    </vu-row>
    使用gap属性设置单元格间隔
    <vu-row gap="5px">
        <vu-col :span="6">
            <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
        </vu-col>
        <vu-col :span="6">
            <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
        </vu-col>
        <vu-col :span="6">
            <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
        </vu-col>
        <vu-col :span="6">
            <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
        </vu-col>
    </vu-row>
    使用offset设置单元格偏移量
    <vu-row gap="5px">
        <vu-col :span="6" :offset="1">
            <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
        </vu-col>
        <vu-col :span="4" :offset="2">
            <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
        </vu-col>
        <vu-col :span="8" :offset="1">
            <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
        </vu-col>
    </vu-row>
</div>

### 代码
```html
基础使用
<vu-row>
    <vu-col :span="8">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
    </vu-col>
    <vu-col :span="8">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
    </vu-col>
    <vu-col :span="8">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
    </vu-col>
</vu-row>
使用gap属性设置单元格间隔
<vu-row gap="5px">
    <vu-col :span="6">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
    </vu-col>
    <vu-col :span="6">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
    </vu-col>
    <vu-col :span="6">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
    </vu-col>
    <vu-col :span="6">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
    </vu-col>
</vu-row>
使用offset设置单元格偏移量
<vu-row gap="5px">
    <vu-col :span="6" :offset="1">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
    </vu-col>
    <vu-col :span="4" :offset="2">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
    </vu-col>
    <vu-col :span="8" :offset="1">
        <div style="background-color: #E44258;border-radius:3px;height:30px;"></div>
    </vu-col>
</vu-row>
```

**注意**
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    每个row可容纳的最大span+offset为24，超出部分会被自动隐藏
</div>

#### Row Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| gap | 单元格间隔大小 | String | 否 | 0px | -- |

#### Col Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| span | 单元格占位大小 | Number | 否 | 6 | 0-24 |
| offset | 单元格距离左侧的偏移量 | Number | 否 | 0 | 0-24 |
