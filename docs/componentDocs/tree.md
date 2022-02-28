# Tree 树形控件

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
  <vu-tree :option="option"></vu-tree>
</div>

<script>
export default {
  data(){
    return {
        option: [
        {
          label: '食物',
          value: 'food',
          children: [
            {
              label: '水果',
              value: 'fruits',
              children: [
                {label:'香蕉',value: '3-1'},
                {label:'苹果',value: '3-2'},
                {label:'鸭梨',value: '3-3'},
                {label:'荔枝',value: '3-4'},
                {label:'栗子',value: '3-5'},
                {label:'李子',value: '3-6'},
                {label:'樱桃',value: '3-7'},
                {label:'凤梨',value: '3-8'},
                {label:'火龙果',value: '3-9'}
              ]
            },
            {
              label: '肉食',
              default: true,
              value: 'meat',
              children: [
                {label:'牛肉',value: '3-1'},
                {label:'鱼肉',value: '3-2'},
                {label:'猪肉',value: '3-3'},
              ]
            },
            {
              label: '其他',
              value: 'other'
            }
          ]
        },
        {
          label: '饮品',
          value: 'drinks',
          default: true,
          children: [
            {label: '芬达',value: '2-1'},
            {label: '可乐',value: '2-2'},
            {label: '雪碧',value: '2-3'}
          ]
        }
      ]
    }
  }
}
</script>

<br>

**配置列表数据**
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
  列表数据由option属性控制进行初始化<br>
  label为列表项标题，children为列表的子项,default默认打开该列表项的子项<br>
  可自定义添加其他参数，在点击列表项时会作为回调参数返回
</div>

### 代码
```html
<!--可直接在style内联样式中修改组件宽度-->
<vu-tree :option="option"></vu-tree>

<script>
export default {
  data(){
    return {
      option: [
        {
          label: '食物',
          value: 'food',
          data: {name: 'food'},
          children: [
            {
              label: '水果',
              value: 'fruits',
              children: [
                {label:'香蕉',alue: '3-1'},
                {label:'苹果',value: '3-2'},
                {label:'鸭梨',value: '3-3'},
                {label:'荔枝',value: '3-4'},
                {label:'栗子',value: '3-5'},
                {label:'李子',value: '3-6'},
                {label:'樱桃',value: '3-7'},
                {label:'凤梨',value: '3-8'},
                {label:'火龙果',value: '3-9'}
              ]
            },
            {
              label: '肉食',
              default: true,
              value: 'meat',
              children: [
                {label:'牛肉',value: '3-1'},
                {label:'鱼肉',value: '3-2'},
                {label:'猪肉',value: '3-3'},
              ]
            },
            {
              label: '其他',
              value: 'other'
            }
          ]
        },
        {
          label: '饮品',
          value: 'drinks',
          default: true,
          children: [
            {label: '芬达',value: '2-1'},
            {label: '可乐',value: '2-2'},
            {label: '雪碧',value: '2-3'}
          ]
        }
      ]
    }
  }
}
</script>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| option | 列表数据 | Array | 是 | -- | 参考示例代码 |
| lineHeight | 每行高度 | String | 否 | 25px | -- |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| click | 点击列表 | 点击项的option路径数组 |
