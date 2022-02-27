<!-- message.vue -->
<template>
  <div class="vu-message" :style="colorStyle+topStyle" @click="click">
    <div class="text" :style="alignStyle+sizeStyle">{{ option.content }}</div>
    <div class="icon" @click="close" v-show="option.close">×</div>
  </div>
</template>
<script>
export default {
  name: "vu-message",
  props: {
    option:Object
  },
  data(){
    return {
      destroy: null
    }
  },
  computed: {
    colorStyle() {
      let backColor= {
        success: "#f0f9eb",
        error: "#fef0f0",
        info: "#edf2fc",
        warning: "#fdf6ec"
      };
      let color = {
        success: '#67c23a',
        error: '#f56c6c',
        info: '#909399',
        warning: '#e6a23c'
      }
      return `background-color: ${backColor[this.option.type] || "#f0f9eb"};color: ${color[this.option.type] || '#67c23a'};`;
    },
    topStyle(){
      if(this.option.top === -1 || this.option.top === 0){
        return `top: -50px;opacity: ${this.option.opacity};`
      }else{
        return `top: ${(this.option.top-1)*55+20}px;opacity: ${this.option.opacity};`
      }
    },
    alignStyle(){
      return `text-align: ${this.option.align || 'left'};`
    },
    sizeStyle(){
      return `font-size: ${this.option.fontSize || '16px'};`
    }
  },
  mounted(){
    setTimeout(() => {
      this.$parent.changeMsgStyle()
    },1)
    this.destroy = setTimeout(() => {
      this.$parent.removeMsg(this.option)
    },this.option.duration || 3000)
  },
  methods: {
    close(){
      window.event.stopPropagation()
      if(this.option.onClose){
        let res = {...this.option}
        delete res.opacity
        delete res.top
        res.type = res.type || 'success'
        this.option.onClose(res)
      }
      clearTimeout(this.destroy)
      this.$parent.removeMsg(this.option)
    },
    click(){
      if(this.option.onClick){
        let res = {...this.option}
        delete res.opacity
        delete res.top
        res.type = res.type || 'success'
        this.option.onClick(res)
      }
    }
  }
};
</script>



<style lang="scss" scoped>
.vu-message {
    display: flex;
    position: fixed;
    z-index: 9999;
    border-radius: 4px;
    min-width: 300px;
    padding: 10px 20px;
    left: 50%;
    transform: translateX(-50%);
    transition: all ease 0.3s;
    .text {
        flex: 1;
    }
    .icon {
        float: right;
        cursor: pointer;
        user-select: none;
        font-size: 14px;
        display: flex;
        align-items: center;
        font-family: fangsong;
        font-weight: 600;
    }
}
</style>