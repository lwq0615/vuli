# tabs

### 标签页

#### 示例
<l-tabs default="1" value="1">
<l-tab-panel label="第一个" name="1">第一个的内容</l-tab-panel>
<l-tab-panel label="第二个" name="2">第二个的内容</l-tab-panel>
<l-tab-panel label="第三个" name="3">第三个的内容</l-tab-panel>
</l-tabs>

#### 代码
```vue
//l-tab必须与l-tab-panel搭配使用
<l-tabs v-model="value" @tabClick="test" default="1">
    <l-tab-panel label="第一个" name="1">第一个的内容</l-tab-panel>
    <l-tab-panel label="第二个" name="2">第二个的内容</l-tab-panel>
    <l-tab-panel label="第三个" name="3">第三个的内容</l-tab-panel>
</l-tabs>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| shadow | 边框阴影 | Boolean | 否 | true | -- |
| value / v-model | 绑定值 | String,Number | 否 | null | --|
| default | 默认选中 | String, Number | 否 | null | -- |


#### Events
| 事件名 | 触发条件 | 参数 |
|  ---  | ---  | ---  | 
| tabClick | 点击标签 | 标签的name |
| tabChange | 标签改变 | 改变前后的name |
