# Scroll 无限滚动

*滚动到底部时会触发scrollEnd事件*

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-scroll @scrollEnd="add">
       <div v-for="i in value" :key="i" style="background-color:#DCDFE6;margin: 2px 0;line-height:30px;">{{ i }}</div>
    </vu-scroll>
</div>

<script>
export default {
  data(){
    return {
      value: 30
    }
  },
  methods: {
    add(){
      this.value += 3
    }
  }
}
</script>

### 代码
```html
<!--可直接在style内联样式中修改组件宽高等样式-->
<vu-scroll @scrollEnd="add">
    <div v-for="i in value" :key="i" style="background-color:#DCDFE6;margin: 2px 0;line-height:30px;">{{ i }}</div>
</vu-scroll>

<script>
export default {
  data(){
    return {
      value: 30
    }
  },
  methods: {
    add(){
      this.value += 3
    }
  }
}
</script>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| noScroll | 是否隐藏滚动条 | Boolean | 否 | false | -- |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| scrollStart | 元素滚动到顶部 | -- |
| scrollEnd | 元素滚动到底部 | -- |