<template>
  <div v-show="show"><slot></slot></div>
</template>

<script>
export default {
  name: "lTabPanel",
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
  },
  created() {
    this.$parent.loadTab({ name: this.name, label: this.label });
  },
  destroyed() {
    this.$parent.delTab({ name: this.name, label: this.label });
  },
  computed: {
    show() {
      return this.$parent.activeName === this.name;
    },
  },
};
</script>