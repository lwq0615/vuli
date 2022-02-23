# Loading 加载

### 示例

<br>
<div style="border:1px solid #e4e7ed;border-radius:5px;padding:10px;height:150px;">
    <div class="loading" style="width:150px;height:150px;"></div>
</div>


### 代码
```html
<!--class="loading"-->
<div class="loading" style="width:150px;height:150px;"></div>
```

<style lang="scss">
.loading{
    position: relative;
}
.loading::before{
    content: "";
    display: block;
    background-color: #DCDFE6;
    position: absolute;
    opacity: 0.5;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    z-index: 2;
}
.loading::after{
    position: absolute;
    content: "";
    display: block;
    transform: translate(-50%,-50%);
    background-image: url(/vui/loading.png);
    background-size: cover;
    width: 20%;
    height: 20%;
    left: 50%;
    top: 50%;
    z-index: 3;
    animation: rotate 2s infinite linear;
}

@keyframes rotate {
    0%{
        transform: translate(-50%,-50%);
    }
    100%{
        transform: translate(-50%,-50%) rotateZ(360deg);
    }
}
</style>
