<template>
    <transition name="vu-dialog-show">
        <section :class="`vu-dialog_container ${modal ? 'modal' : ''}`" v-show="showDialog">
            <div class="dialog-box" :style="widthStyle+heightStyle" ref="dialogBox">
                <div class="title">
                    {{$slots.title ? '' : '提示'}}
                    <slot name="title"></slot>
                    <div class="close-icon" @click="hide">×</div>
                </div>
                <p>
                    <slot name="content"></slot>
                </p>
                <div>
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
        }
    },
    data(){
        return {
            showDialog: false
        }
    },
    computed: {
        widthStyle(){
            return `width:${this.width};`
        },
        heightStyle(){
            return `height:${this.height};`
        }
    },
    methods: {
        hide(){
            this.$emit('hide')
            this.showDialog = false
        },
        show(){
            this.$emit('show')
            this.showDialog = true
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
        pointer-events: auto;
        z-index: 100;
        user-select: text;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        transition: all ease 0.3s;
        padding: 10px 15px;
        .title {
            margin: 0;
            font-size: 17px;
            position: relative;
            user-select: none;
            .close-icon {
                display: flex;
                width: 20px;
                height: 20px;
                justify-content: center;
                align-items: center;
                position: absolute;
                right: 10px;
                top: 10px;
                font-size: 23px;
                color: #e44258;
                cursor: pointer;
                user-select: none;
            }
        }
    }
}

.vu-dialog_container.modal {
    background-color: rgba($color: #000000, $alpha: 0.3);
    pointer-events: auto;
}

.vu-dialog-show-enter-active,
.vu-dialog-show-leave-active {
    transition: all 0.3s;
}
.vu-dialog-show-enter,
.vu-dialog-show-leave-to {
    opacity: 0;
    .dialog-box {
        transform: translateY(-50px);
    }
}
</style>