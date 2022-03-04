# Vuli组件库

### 快速开始

### 1.安装组件库
```bash
npm install vuli
```

### 2.引用组件库

#### 全部引入
```js
//main.js
import 'vuli/dist/css/index.css'
import Vuli from 'vuli'
Vue.use(Vuli)
```

#### 按需引入
```js
//main.js
import 'vuli/dist/css/index.css'
import { button } from 'vuli'
Vue.use(button)
```
