# luck组件库

### 快速开始

### 1.安装组件库
```bash
npm install luck-ui
```

### 2.引用组件库

#### 全部引入
```js
//main.js
import 'luck-ui/dist/css/index.css'
import LuckUI from 'luck-ui'
Vue.use(LuckUI)
```

#### 按需引入
```js
//main.js
import 'luck-ui/dist/css/index.css'
import { button } from 'luck-ui'
Vue.use(button)
```
