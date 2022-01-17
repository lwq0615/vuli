<template>
  <div
    class="l-tabs_container"
    :style="`${shadow ? 'box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);' : ''}`"
  >
    <div class="tab">
      <div
        :class="`tab-item ${activeName === item.name ? 'tab-item-active' : ''}`"
        :ref="item.name"
        v-for="(item, index) in tabs"
        :key="index"
        @click="tabItemClick(item.name)"
      >
        {{ item.label }}
      </div>
      <div class="tab-item" style="flex: 1;padding:0"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "lTabs",
  props: {
    shadow: {
      type: Boolean,
      default: true,
    },
    value: {
      type: [String, Number],
      default: null,
    },
    default: {
      type: [String, Number],
      default: null,
    },
  },
  model: {
    prop: "value",
    event: "tabChange",
  },
  watch: {
    value: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.tabChange(newVal);
        }
      },
    },
  },
  data() {
    return {
      tabs: [],
      activeName: null,
    };
  },
  created() {
    // this.tabs = this.getTabs()
    this.activeName = this.default;
  },
  methods: {
    loadTab(tabItem) {
      let add = true;
      for (let tab of this.tabs) {
        if (tab.name === tabItem.name) {
          add = false;
          break;
        }
      }
      if (add) {
        this.tabs.push({
          label: tabItem.label,
          name: tabItem.name,
        });
      }
    },
    delTab(tabItem) {
      for (let i in this.tabs) {
        if (this.tabs[i].name === tabItem.name) {
          this.tabs.splice(i,1)
          break;
        }
      }
    },
    tabItemClick(name) {
      this.$emit("tabClick", name);
      this.tabChange(name);
    },
    tabChange(name) {
      if (this.activeName !== name) {
        this.$emit("tabChange", name);
      }
      this.activeName = name;
    },
  },
};
</script>