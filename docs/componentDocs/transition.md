# Transition 过渡动画

*借助vue的过渡状态实现的过渡动画，由v-show控制动画执行*

### 示例

*fade淡入淡出*

<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;height:150px;">
    <l-button @click="fade = !fade">click</l-button><br>
    <transition name="fade">
        <div v-show="fade" class="div">fade</div>
    </transition>
</div>

### 代码
```html
<l-button @click="show = !show">click</l-button><br>
<transition name="fade">
    <div v-show="show" class="div">fade</div>
</transition>

<script>
export default {
  data(){
    return {
      show: true
    }
  }
}
</script>
```

<br>

*rotate旋转*

<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;background-color:#FAFAFA;height:260px;">
    <l-button @click="rotate = !rotate">click</l-button><br>
    <div class="grid">
        <transition name="rotate">
            <div v-show="rotate" class="div">rotate</div>
        </transition>
        <transition name="rotate-top">
            <div v-show="rotate" class="div">rotate-top</div>
        </transition>
        <transition name="rotate-bottom">
            <div v-show="rotate" class="div">rotate-bottom</div>
        </transition>
        <transition name="rotate-left">
            <div v-show="rotate" class="div">rotate-left</div>
        </transition>
        <transition name="rotate-right">
            <div v-show="rotate" class="div">rotate-right</div>
        </transition>
        <transition name="rotate-x">
            <div v-show="rotate" class="div">rotate-x</div>
        </transition>
        <transition name="rotate-y">
            <div v-show="rotate" class="div">rotate-y</div>
        </transition>
    </div>
</div>

### 代码
```html
<l-button @click="show = !show">click</l-button><br>
<transition name="rotate">
    <div v-show="show" class="div">rotate</div>
</transition>
<transition name="rotate-top">
    <div v-show="show" class="div">rotate-top</div>
</transition>
<transition name="rotate-bottom">
    <div v-show="show" class="div">rotate-bottom</div>
</transition>
<transition name="rotate-left">
    <div v-show="show" class="div">rotate-left</div>
</transition>
<transition name="rotate-right">
    <div v-show="show" class="div">rotate-right</div>
</transition>
<transition name="rotate-x">
    <div v-show="show" class="div">rotate-x</div>
</transition>
<transition name="rotate-y">
    <div v-show="show" class="div">rotate-y</div>
</transition>

<script>
export default {
  data(){
    return {
      show: true
    }
  }
}
</script>
```

<script>
export default {
  data(){
    return {
      fade: true,
      rotate: true
    }
  }
}
</script>

<style lang="scss">
.div{
    background-color: #E44258;
    width: 100px;
    height: 100px;
    margin-top: 10px;
    line-height: 100px;
    text-align: center;
    display: inline-block;
    justify-content: center;
    align-items: center;
    color: white;
}
.grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}



.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

.rotate-enter-active,
.rotate-leave-active {
    transition: opacity 0.3s,transform 0.3s;
}
.rotate-enter, .rotate-leave-to {
    opacity: 0;
    transform: rotateY(45deg) rotateX(45deg);
}

.rotate-top-enter-active,
.rotate-top-leave-active {
    transform-origin: 0% 0%;
    transition: transform 0.2s;
}
.rotate-top-enter, .rotate-top-leave-to {
    transform-origin: 0% 0%;
    transform: rotateX(90deg);
}

.rotate-bottom-enter-active,
.rotate-bottom-leave-active {
    transform-origin: 0% 100%;
    transition: transform 0.2s;
}
.rotate-bottom-enter, .rotate-bottom-leave-to {
    transform-origin: 0% 100%;
    transform: rotateX(90deg);
}

.rotate-left-enter-active,
.rotate-left-leave-active {
    transform-origin: 0% 0%;
    transition: transform 0.2s;
}
.rotate-left-enter, .rotate-left-leave-to {
    transform-origin: 0% 0%;
    transform: rotateY(90deg);
}

.rotate-right-enter-active,
.rotate-right-leave-active {
    transform-origin: 100% 0%;
    transition: transform 0.2s;
}
.rotate-right-enter, .rotate-right-leave-to {
    transform-origin: 100% 0%;
    transform: rotateY(90deg);
}

.rotate-x-enter-active,
.rotate-x-leave-active {
    transition: transform 0.2s;
}
.rotate-x-enter, .rotate-x-leave-to {
    transform: rotateX(90deg);
}

.rotate-y-enter-active,
.rotate-y-leave-active {
    transition: transform 0.2s;
}
.rotate-y-enter, .rotate-y-leave-to {
    transform: rotateY(90deg);
}
</style>
