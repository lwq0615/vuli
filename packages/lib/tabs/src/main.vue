<template>
  <div
    class="vu-tabs_container"
    :style="`${shadow ? 'box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);' : ''}`"
  >
    <div class="tab">
      <div
        :class="`tab-item ${activeValue === item.name ? 'tab-item-active' : ''}`"
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
  name: "vu-tabs",
  props: {
    shadow: {
      type: Boolean,
      default: true,
    },
    value: {
      type: [String, Number],
      default: null,
    }
  },
  model: {
    prop: "value",
    event: "model",
  },
  watch: {
    value: {
      handler(newVal) {
        this.tabChange(newVal);
      },
    },
  },
  data() {
    return {
      tabs: [],
      activeValue: null
    };
  },
  created(){
    this.activeValue = this.value
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
      if (this.activeValue !== name) {
        this.$emit('change',name)
        this.activeValue = name
        this.$emit("model", name);
      }
    },
  },
};
</script>