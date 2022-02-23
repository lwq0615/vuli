# Upload 上传

### 示例

*上传文件*
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <l-upload 
    :limit="3" 
    action="/test" 
    :autoUpload="true" 
    :data="{name: 'luck'}"></l-upload>
</div>

### 代码

```html
<l-upload 
:limit="3" 
action="/test" 
:autoUpload="true" 
:data="{name: 'luck'}">
    上传文件
</l-upload>
```

### 示例

*上传照片*
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
  <l-upload 
  type="image" 
  :data="data"
  tip="只允许上传图片" 
  accept="jpg,png" ></l-upload>
</div>

<script>
export default {
  methods: {
    data(file){
      return {
        name: file.name
      }
    }
  }
}
</script>

### 代码
```html
<l-upload 
type="image" 
:data="data"
tip="只允许上传图片" 
accept="jpg,png" ></l-upload>

<script>
export default {
  methods: {
    //data为function时回调参数为当前上传的文件
    data(file){
      return {
        name: file.name
      }
    }
  }
}
</script>
```

<br>

**注意**
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    多文件上传时，每个文件都会单独调用一次上传接口，后台接收文件数据的name为file<br>
    使用data附带请求参数时，name为data的每个key
</div>

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| v-model | 绑定的文件列表(只读，绑定后不可修改值) | Array | 否 | -- | -- |
| accept | 允许上传的文件类型 | String | 否 | -- | 以','分隔的字符串 |
| multiple | 是否可以多选 | Boolean | 否 | true | -- |
| tip | 提示文本 | String | 否 | 点击上传文件 | -- |
| limit | 最大上传数量 | Number | 否 | -- |-- |
| autoUpload | 选择文件后是否自动上传 | Boolean | 否 | false |-- |
| action | 上传的服务器地址 | String | 否 | -- | -- |
| type | 组件样式 | String | 否 | file | file或image |
| cutType | type='image'时图片裁剪方式 | String | 否 | cover | 参考object-fit属性 |
| headers | 请求的header | Object | 否 | -- | -- |
| data | 请求时附带的参数 | Object,Function | 否 | -- | 类型为Function时回调参数为上传的文件 |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| fileClick | 点击文件列表中的文件 | 被点击的文件 |
| change | 文件列表发生改变 | 改变后的列表 |
| exceed | 选择的文件数量超出限制 | 超出部分的文件 |
| remove | 移除列表中的文件 | 被移除的文件 |
| upload | 调用upload方法(autoUpload导致的自动上传也会触发事件) | -- |
| start | 文件开始上传 | 开始上传的文件 |
| progress | 文件上传时 | event,上传的文件 |
| end | 文件上传成功 | event,上传成功的文件 |
| success | 文件全部上传完成 | 上传的文件(不包含重复上传) |
| error | 文件上传失败 | error,上传失败的文件 |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| getFiles | 获取文件列表 | --  | -- |
| inputFiles | 打开文件选择窗口 | -- | -- |
| delFile | 删除列表中的文件 | file | -- |
| clear | 清空文件列表 | -- | -- |
| upload | 上传列表中未上传的文件 | -- | -- |
