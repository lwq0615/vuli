<template>
  <div v-show="show"><slot></slot></div>
</template>

<script>
export default {
  name: "l-tab-panel",
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ""
    },
  },
  created() {
    if(this.$parent.$options._componentTag === 'l-tabs'){
      this.$parent.loadTab({ name: this.name, label: this.label });
    }
  },
  destroyed() {
    if(this.$parent.$options._componentTag === 'l-tabs'){
      this.$parent.delTab({ name: this.name, label: this.label });
    }
  },
  computed: {
    show() {
      return this.$parent.activeValue === this.name;
    },
  },
};
</script>