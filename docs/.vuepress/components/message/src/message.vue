<!-- message.vue -->
<template>
  <div class="l-message" :style="colorStyle+topStyle">
    <div class="text" :style="alignStyle+sizeStyle">{{ option.content }}</div>
    <div class="icon" @click="close" v-show="option.close">×</div>
  </div>
</template>
<script>
export default {
  name: "lMessage",
  props: {
    option:Object
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
  methods: {
    close(){
      if(this.option.onClose){
        let res = {...this.option}
        delete res.onClose
        delete res.opacity
        delete res.top
        res.type = res.type || 'success'
        this.option.onClose(res)
      }
      this.$parent.removeMsg(this.option)
    }
  }
};
</script>



<style lang="scss" scoped>
.l-message {
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
        font-size: 16px;
    }
}
</style>