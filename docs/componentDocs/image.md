# Image 图片

### 示例

*grid方格布局*
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-image style="width:100%;height:500px;">
        <vu-image-item :src="'/vui/'+(index%3+1)+'.jpg'" v-for="(item,index) in 20" :key="index" lazy></vu-image-item>
    </vu-image>
</div>

### 代码
```html
<!-- 可直接通过style内联样式修改组件宽高 -->
<vu-image style="width:100%;height:500px;">
    <vu-image-item :src="'/vui/'+(index%3+1)+'.jpg'" v-for="(item,index) in 20" :key="index" lazy></vu-image-item>
</vu-image>
```

### 示例

*fall瀑布布局*
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-image style="width:100%;height:500px;" type="fall">
        <vu-image-item :src="'/vui/'+(index%3+1)+'.jpg'" v-for="(item,index) in 20" :key="index"></vu-image-item>
    </vu-image>
</div>

### 代码
```html
<!-- 可直接通过style内联样式修改组件宽高 -->
 <vu-image style="width:100%;height:500px;" type="fall">
    <vu-image-item :src="'/vui/'+(index%3+1)+'.jpg'" v-for="(item,index) in 20" :key="index"></vu-image-item>
</vu-image>
```

#### Image Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| columns | 每行列数 | Number | 否 | 4 | -- |
| gap | 每列之间间隔 | String | 否 | 5px | -- |
| cutType | 图片裁剪方式 | String | 否 | cover | 参考object-fit属性 |
| type | 布局样式 | String | 否 | grid | grid,fall |
| noScroll | 是否隐藏滚动条 | Boolean | 否 | false | -- |


#### Image-item Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| src | 图片资源地址 | String | 是 | -- | -- |
| lazy | 是否开启图片懒加载 | Boolean | 否 | false | -- |


#### Image Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| scrollEnd | 滚动条触底 | -- |


#### Image-item Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| load | 图片加载完成 | 图片资源地址 |
| click | 点击图片 | 图片资源地址 |