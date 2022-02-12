<template>
  <div class="l-tag_container" :style="colorStyle" :class="size || 'default'">
    <slot></slot>
    <span class="close" @click="closeEvent" v-show="close">×</span>
  </div>
</template>

<script>
export default {
  name: "l-tag",
  props: {
    type: String,
    color: String,
    close: {
        type: Boolean,
        default: false
    },
    size: String,
    value: null
  },
  computed: {
    colorStyle() {
      let style = ``
      let colors = {
        primary: "#409EFF",
        success: "#67C23A",
        info: "#909399",
        warning: "#E6A23C",
        error: "#F56C6C",
      }
      let color = colors[this.color] || this.color || "#409EFF"
      style += `color: ${this.type === 'dark' ? 'white' : color};`
      let rgb = []
      for(let i = 1;i <= 5;i += 2){
          rgb.push(parseInt('0x'+color.substr(i,2)))
      }
      color = rgb.join(",")
      let alphas = {
        dark: "1",
        light: "0.2",
        plain: '0'
      }
      let alpha = alphas[this.type] || "0.2"
      style += `background-color: rgba(${color}, ${alpha});`
      style += `border: 1px solid rgba(${color}, 0.3);`
      return style
    }
  },
  methods: {
      closeEvent(){
          this.$emit('close',this.value)
      }
  }
}
</script>

<style lang="scss" scoped>
.l-tag_container {
    display: inline-block;
    border: 1px solid #e4e7ed;
    padding: 5px 10px;
    font-size: 13px;
    border-radius: 3px;
    cursor: pointer;
    color: #606266;
    .close{
        display: inline-block;
    }
}
.l-tag_container.mini{
    padding: 1px 2px;
    font-size: 10px;
    .close {
        margin-left: 2px;
    }
}
.l-tag_container.small{
    padding: 3px 5px;
    font-size: 11px;
    .close {
        margin-left: 3px;
        width: 7px;
    }
}
.l-tag_container.default{
    padding: 5px 10px;
    font-size: 13px;
    .close {
        margin-left: 5px;
        width: 7px;
    }
}
.l-tag_container.big{
    padding: 7px 14px;
    font-size: 16px;
    .close {
        margin-left: 8px;
        width: 8px;
    }
}
</style>