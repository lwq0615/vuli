<template>
    <transition name="vu-dialog-show">
        <section 
        :class="`vu-dialog_container ${modal ? 'modal' : ''}`" 
        v-show="showDialog"
        @click="modelHide && hide()">
            <div class="dialog-box" :style="dialogStyle+moveStyle" ref="dialogBox" @click="$event.stopPropagation()">
                <div class="dialog-box-title" @mousedown="mousedown">
                    {{$slots.title ? '' : '提示'}}
                    <div class="text"><slot name="title"></slot></div>
                    <div class="close-icon" @click="hide">×</div>
                </div>
                <p class="dialog-box-content">
                    <slot name="content"></slot>
                </p>
                <div class="dialog-box-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </section>
    </transition>
</template>


<script>
export default {
    name: 'vu-dialog',
    props: {
        width: {
            type: String,
            default: '500px'
        },
        height: {
            type: String,
            default: 'auto'
        },
        modal: {
            type: Boolean,
            default: true
        },
        modelHide: {
            type: Boolean,
            default: true
        },
        moveable: Boolean,
        esc: {
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            showDialog: false,
            moveStyle: 'transform: translate(0,0);'
        }
    },
    computed: {
        dialogStyle(){
            return `width:${this.width};height:${this.height};`
        }
    },
    methods: {
        hide(){
            this.$emit('hide')
            this.showDialog = false
        },
        show(){
            this.$emit('show')
            this.moveStyle = 'transform: translate(0,0);'
            this.showDialog = true
            if(this.esc){
                let fun = (e) => {
                    if(e.keyCode === 27){
                        this.hide()
                        window.removeEventListener('keydown',fun)
                    }
                }
                window.addEventListener('keydown',fun)
            }
            
        },
        mousedown(downE){
            if(this.moveable){
                let x = downE.clientX
                let y = downE.clientY
                let old = this.moveStyle.split(",").map(item => {
                    return parseInt(item.replace(/[^0-9,-]/ig,""))
                })
                let moveFun = (moveE) => {
                    let moveX = moveE.clientX-x+old[0]
                    let moveY = moveE.clientY-y+old[1]
                    this.moveStyle = `transform: translate(${moveX}px,${moveY}px);`
                }
                window.addEventListener('mousemove',moveFun)
                let upFun = () => {
                    window.removeEventListener('mousemove',moveFun)
                    window.removeEventListener('mouseup',upFun)
                }
                window.addEventListener('mouseup',upFun)
            }
        }
    }
}
</script>