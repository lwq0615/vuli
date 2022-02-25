# Pagination 分页器

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-pagination 
    :page="page" 
    :sizeList="[5,10,20,30,50,100]" 
    elements="last,current,next,size,goto,total"></vu-pagination>
</div>

<script>
export default {
  data(){
    return {
      page: {
        current: 1,
        size: 10,
        total: 200
      }
    }
  }
}
</script>

### 代码
```html
<!-- 可通过elements属性的排列顺序来更改分页器各组件的布局,多个组件之间用','分割 -->
<vu-pagination 
:page="page" 
:sizeList="[5,10,20,30,50,100]" 
elements="last,current,next,size,goto,total"></vu-pagination>

<script>
export default {
  data(){
    return {
      page: {
        current: 1,
        size: 10,
        total: 200
      }
    }
  }
}
</script>
```

### elements各组件
<br>

<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    current 页码：<vu-pagination :page="page" elements="current"></vu-pagination><br><br>
    last 上一页：<vu-pagination :page="page" elements="last"></vu-pagination><br><br>
    next 下一页：<vu-pagination :page="page" elements="next"></vu-pagination><br><br>
    size 每页条数选择器：<vu-pagination :page="page" elements="size"></vu-pagination><br><br>
    goto 页码跳转：<vu-pagination :page="page" elements="goto"></vu-pagination><br><br>
    total 总条数文本：<vu-pagination :page="page" elements="total"></vu-pagination><br><br>
    sizeText 每页条数文本：<vu-pagination :page="page" elements="sizeText"></vu-pagination>
</div>


### 代码
```html
urrent 页码：<vu-pagination :page="page" elements="current"></vu-pagination>

last 上一页：<vu-pagination :page="page" elements="last"></vu-pagination>

next 下一页：<vu-pagination :page="page" elements="next"></vu-pagination>

size 每页条数选择器：<vu-pagination :page="page" elements="size"></vu-pagination>

goto 页码跳转：<vu-pagination :page="page" elements="goto"></vu-pagination>

total 总条数文本：<vu-pagination :page="page" elements="total"></vu-pagination>

sizeText 每页条数文本：<vu-pagination :page="page" elements="sizeText"></vu-pagination>

<script>
export default {
  data(){
    return {
      page: {
        current: 1,
        size: 10,
        total: 200
      }
    }
  }
}
</script>
```


#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| page | 分页信息 | Object | 是 | -- | current:当前页码,size:每页条数,total:总条数(每个参数都是必填的) |
| elements | 需要的分页器元素 | String | 否 | last,current,next,size,total | last,current,next,size,<br>goto,total,sizeText |
| sizeList | size元素列表的每页条数 | Array| 否 | [10,20,50,100] | -- |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| currentChange | 页码改变 | 改变后的页码 |
| sizeChange | 每页条数改变 | 改变后的每页条数 |
| totalChange | 总条数改变 | 改变后的总条数 |
| last | 点击上一页按钮 | 上一页的页码 |
| next | 点击下一页按钮 | 下一页的页码 |
| currentClick | 点击页码 | 点击的页码 |
| goto | 点击跳转按钮 | 跳转的页码 |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| setCurrent | 设置页码 | current  | -- |
| setSize | 设置每页条数 | size  | -- |
| setTotal | 设置总条数 | total  | -- |
