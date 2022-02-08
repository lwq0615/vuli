# message 消息

### 

#### 示例
###
<l-button @click="test">提示消息</l-button>

<script>
import message from '../.vuepress/components/message/index.js'
export default {
  methods: {
    test(){
      message.info({
        content:"这是一条info的消息",
        close: true,
        onClose(e){
          console.log(e)
        }
      })
      message("这是一条success的消息")
      message.error("这是一条error的消息")
      message.warning("这是一条warning的消息")
    }
  }
}
</script>

#### 代码
```html
<l-button @click="test">按钮</l-button>

<script>
export default {
  methods: {
    test(){
      //$message为全局方法，可通过this直接调用
      this.$message.info({
        content:"这是一条info的消息",
        close: true,
        onClose(e){
          console.log(e)
        }
      })
      this.$message("这是一条success的消息")
      this.$message.error("这是一条error的消息")
      this.$message.warning("这是一条warning的消息")
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
| 事件名 | 触发条件 | 参数 |
|  ---  | ---  | ---  | 
| onClose | 点击关闭按钮触发 | 传入的参数 |
