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


<style lang="scss" scoped>
.vu-dialog_container {
    position: fixed;
    z-index: 99;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10%;
    pointer-events: none;
    .dialog-box {
        position: relative;
        top: 0;
        pointer-events: auto;
        z-index: 100;
        user-select: text;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        .dialog-box-title {
            padding: 10px 15px;
            margin: 0;
            font-size: 17px;
            user-select: none;
            display: flex;
            .text{
                flex: 1;
            }
            .close-icon {
                display: flex;
                width: 20px;
                height: 20px;
                justify-content: center;
                align-items: center;
                font-size: 23px;
                color: #e44258;
                cursor: pointer;
                user-select: none;
            }
        }
        .dialog-box-content{
            padding: 0 15px;
        }
        .dialog-box-footer{
            padding: 10px 15px;
        }
    }
}

.vu-dialog_container.modal {
    background-color: rgba($color: #000000, $alpha: 0.3);
    pointer-events: auto;
}

.vu-dialog-show-enter-active,
.vu-dialog-show-leave-active {
    transition: all ease 0.3s;
    .dialog-box {
        transition: all ease 0.3s;
    }
}
.vu-dialog-show-enter,
.vu-dialog-show-leave-to {
    opacity: 0;
    .dialog-box {
        top: -50px;
    }
}
</style>