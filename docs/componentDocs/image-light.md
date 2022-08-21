# Image-light 图片预览

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;">
    <vu-button @click="image" color="error">查看大图</vu-button>
</div>

<script>
import imageLight from '../.vuepress/components/image-light/index.js'
export default {
  methods: {
    image(){
      imageLight("/vuli//2.jpg")
    }
  }
}
</script>


### 代码
```html
<vu-button @click="image" color="error">查看大图</vu-button>

<script>
export default {
  methods: {
    image(){
      //$imageLight为全局方法，可通过this直接调用
      //参数为图片的资源地址
      this.$imageLight("/vuli/2.jpg")
    }
  }
}
</script>
```


#### 单独引用
```js
import { imageLight } from 'vuli';

imageLight("/2.jpg")
```