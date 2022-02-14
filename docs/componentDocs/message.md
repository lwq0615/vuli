# Message 消息

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
  <l-button @click="info">info</l-button>
  <l-button @click="success">success</l-button>
</div>

<script>
import message from '../.vuepress/components/message/index.js'
export default {
  methods: {
    info(){
      message({
        type: 'info',
        content:"这是一条info的消息",
        close: true,
        onClose(e){
          console.log(e)
        },
        onClick(e){
          console.log(e)
        }
      })
    },
    success(){
      message.success('这是一条success的消息')
    }
  }
}
</script>

### 代码
```html
<l-button @click="info">info</l-button>
<l-button @click="success">success</l-button>

<script>
export default {
  methods: {
    info(){
      //$message为全局方法，可通过this直接调用
      this.$message({
        type: 'info',
        content:"这是一条info的消息",
        close: true,
        onClose(e){
          console.log(e)
        },
        onClick(e){
          console.log(e)
        }
      })
    },
    success(){
      this.$message.success('这是一条success的消息')
    }
  }
}
</script>
```

#### 单独引用
```js
import { message } from 'luck-ui';

message.success('成功了')
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| content | 消息内容 | String,Number | 否 |  | -- |
| type | 外观类型 | String | 否 | success | success,error,info,warning |
| align | 文字对其方式 | String | 否 | left | 参考text-align属性 |
| fontSize | 文字大小 | String | 否 | 16px | -- |
| close | 是否显示关闭按钮 | Boolean | 否 | false | -- |


#### Events
| 事件名 | 触发条件 | 回调参数 |
|  ---  | ---  | ---  | 
| onClose | 点击关闭按钮触发 | 调用时传入的参数 |
| onClick | 点击消息弹窗触发 | 调用时传入的参数 |
