<template>
    <transition name="vui-dialog-show">
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