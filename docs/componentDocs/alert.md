# Alert 弹窗

### 

#### 示例
###
<l-button @click="alert">消息提示</l-button>

<script>
import message from '../.vuepress/components/message/index.js'
import Alert from '../.vuepress/components/alert/index.js'
export default {
  methods: {
    alert(){
      Alert({
        title: '提示',
        content: '提示消息',
        buttons: [
            {
                text: '取消',
                type: 'default'
            },
            {
                text: '确定',
                type: 'enter',
                close: false,
                click(){
                  message('提交成功')
                }
            }
        ]
      }).then((button) => {
        if(button.text === '确定'){
          Alert.close()
        }
      })
    }
  }
}
</script>

#### 代码
```html
<l-button @click="alert">按钮</l-button>

<script>
export default {
  methods: {
    alert(){
      let that = this
      this.$alert({
        title: '提示',
        content: '提示消息',
        buttons: [
            {
                text: '取消',
                type: 'default'
            },
            {
                text: '确定',
                type: 'enter',
                close: false,
                click(){
                  that.$message('提交成功')
                }
            }
        ]
      }).then((button) => {
        if(button.text === '确定'){
          //直接在js中调用close方法关闭弹窗
          that.$alert.close()
        }
      })
    }
  }
}
</script>
```

#### Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| title | 标题 | String | 否 | 提示 | -- |
| width | 组件宽度 | String | 否 | 350px | -- |
| height | 组件高度 | String | 否 | auto | -- |
| content | 消息文本 | String | 否 | -- | -- |
| contentHeight | 消息文本的最高高度，超出可滚动查看 | String | 否 | 200px | -- |
| buttons | 按钮配置 | Array | 否 | 默认有'取消','确定'按钮 | 具体查看下方配置 |


#### button Attributes
| 参数 | 说明 | 类型 | 是否必填 | 默认值 | 可选值 |
| ---  | --- | ---  | ---      | ---   | ---   |
| text | 按钮文本 | String | 否 | 按钮 | -- |
| type | 按钮样式 | String | 否 | default | default,error,enter |
| close | 点击按钮时是否关闭弹窗 | Boolean | 否 | true | true,false |
| click | 点击按钮时触发的事件 | function | 否 | -- | -- |



#### Methods
| 方法名 | 说明 | 所需参数 | 参数说明 |
|  ---  | ---  | ---  | --- |
| then | 定义点击任意按钮时执行的函数 | function(button)  | button为点击的按钮信息 |
| close | 关闭弹窗 | --  | -- |