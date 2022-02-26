# Cascader 级联选择器

### 示例

<br>

<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
  <vu-cascader :option="option" v-model="value"></vu-cascader>
</div>

<script>
export default {
  data(){
    return {
      value: [],
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
          children: [
            {
              label: '芬达',
              value: '2-1'
            },
            {
              label: '可乐',
              value: '2-2'
            },
            {
              label: '雪碧',
              value: '2-3'
            }
          ]
        }
      ]
    }
  }
}
</script>

<br>

### 代码
```html
<!--可直接在style内联样式中修改组件宽高-->
<vu-cascader :option="option" v-model="value"></vu-cascader>

<script>
export default {
  data(){
    return {
      value: [],
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
| value / v-model | 绑定值 | Array | 是 | -- | -- |
| option | 各层菜单配置 | Array | 是 | -- | 格式参照示例代码 |
| placeholder | 输入框占位文本 | String | 否 | '请选择' | -- |
| menuHeight | 各层菜单的最高高度(超出部分滚动查看) | String| 否 | 200px | -- |
| menuWidth | 各层菜单的宽度 | String | 否 | 180px | -- |
| hover | hover展开子菜单 | Boolean | 否 | false | -- |
| disable | 禁用选择器 | Boolean | 否 | false | -- |
| clearable | 是否可清空 | Boolean | 否 | false | -- |
| showLast | 仅显示最后一级 | Boolean | 否 | false | -- |
| join | 各级之间的连接符 | String | 否 | ' / ' | -- |
| childCount | 显示子菜单数量 | Boolean | 否 | false | -- |
| overChange | 选择最后一级后才改变value值 | Boolean | 否 | true | -- |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| change | value值改变 | 改变后的值 |
| hide | 菜单被隐藏 | -- |
| show | 菜单被展开 | -- |
| check | 点击最后一级菜单 | 点击的菜单信息 |
| clear | 点击清除按钮 | -- |


#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| clearValue | 清空输入值 | --  | -- |
