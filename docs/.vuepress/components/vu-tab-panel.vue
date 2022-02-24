<template>
  <div v-show="show"><slot></slot></div>
</template>

<script>
export default {
  name: "vu-tab-panel",
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
    if(this.$parent.$options._componentTag === 'vu-tabs'){
      this.$parent.loadTab({ name: this.name, label: this.label });
    }
  },
  destroyed() {
    if(this.$parent.$options._componentTag === 'vu-tabs'){
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