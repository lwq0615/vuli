# Tabs 标签页

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
  <vu-tabs v-model="value" @change="test">
    <vu-tab-panel label="第一个" name="1">第一个的内容</vu-tab-panel>
    <vu-tab-panel label="第二个" name="2">第二个的内容</vu-tab-panel>
    <vu-tab-panel label="第三个" name="3">第三个的内容</vu-tab-panel>
  </vu-tabs>
</div>

<script>
export default {
  data(){
    return {
      value: '1'
    }
  },
  methods: {
    test(e){
      console.log(e)
    }
  }
}
</script>

### 代码
```html
<!--vu-tab必须与vu-tab-panel搭配使用-->
<vu-tabs v-model="value" @change="test">
    <vu-tab-panel label="第一个" name="1">第一个的内容</vu-tab-panel>
    <vu-tab-panel label="第二个" name="2">第二个的内容</vu-tab-panel>
    <vu-tab-panel label="第三个" name="3">第三个的内容</vu-tab-panel>
</vu-tabs>

<script>
export default {
  data(){
    return {
      value: '1'
    }
  },
  methods: {
    test(e){
      console.log(e)
    }
  }
}
</script>
```

#### Tabs Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| value / v-model | 绑定值 | String,Number | 否 | null | --|
| shadow | 边框阴影 | Boolean | 否 | true | -- |


#### Tab-panel Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| label | 标签展示的文本 | String | 否 | '' | -- |
| name | 唯一标识 | String | 是 | -- | --|


#### Tabs Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| tabClick | 点击标签 | 标签的name |
| change | 标签改变 | 改变后的name |
