# Image-Light 图片预览

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <l-button @click="image">查看大图</l-button>
</div>

<script>
import imageLight from '../.vuepress/components/image-light/index.js'
export default {
  methods: {
    image(){
      imageLight("/2.jpg")
    }
  }
}
</script>


### 代码
```html
<l-button @click="image">查看大图</l-button>

<script>
export default {
  methods: {
    image(){
      //$imageLight为全局方法，可通过this直接调用
      this.$imageLight("/2.jpg")
    }
  }
}
</script>
```


#### 单独引用
```js
import { imageLight } from 'luck-ui';

imageLight("/2.jpg")
```