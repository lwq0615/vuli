//鼠标移动事件处理
function mouseMove(el, transformX, transformY, pageX, pageY) {
    //节流相关变量
    let bool = true
    return (e) => {
        if (!bool) return
        let moveX = e.pageX - pageX
        let moveY = e.pageY - pageY
        el.style.transform = `translate(${transformX + moveX}px, ${transformY + moveY}px)`
        bool = false
        setTimeout(() => {
            bool = true
        }, 16)
    }
    
}

//鼠标按下时事件处理
function mouseDown(e) {
    const transform = this.style.transform.replace(/[^0-9,-]/g, "")
    //鼠标按下时元素的transform属性
    let transformX = parseInt(transform.split(",")[0]) || 0
    let transformY = parseInt(transform.split(",")[1]) || 0
    //鼠标按下时的位置
    let pageX = e.pageX
    let pageY = e.pageY
    let mouseMoveEvent = mouseMove(this, transformX, transformY, pageX, pageY)
    window.addEventListener("mousemove", mouseMoveEvent)
    //鼠标松开解除绑定
    window.addEventListener("mouseup", function () {
        window.removeEventListener("mousemove", mouseMoveEvent)
    })
}

//绑定事件
function bindEvent(el, bindFlg) {
    if (bindFlg || bindFlg === void 0) {
        el.addEventListener("mousedown", mouseDown)
    } else {
        el.removeEventListener("mousedown", mouseDown)
    }
}

export default {
    bind(el, binding) {
        bindEvent(el, binding.value)
    },
    update(el, binding) {
        bindEvent(el, binding.value)
    },
    unbind(el) {
        bindEvent(el, false)
    }
}