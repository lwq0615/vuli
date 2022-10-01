<template>
  <div
    :class="`vu-image-item_container ${loading}`"
    @click="$emit('click', src)"
  >
    <img :src="load ? src : ''" :style="imgStyle" @load="loadEnd" ref="img" />
  </div>
</template>

<script>
export default {
  name: "vu-image-item",
  props: {
    src: String,
    lazy: Boolean,
  },
  data() {
    return {
      load: false,
      loading: "",
      observer: null,
    };
  },
  computed: {
    imgStyle() {
      return `object-fit: ${this.$parent.cutType};`;
    },
  },
  mounted() {
    // 开启懒加载
    if (this.lazy) {
      this.observer = new IntersectionObserver((entries) => {
        //返回true代表在页面可视区域，false代表不在页面可视区域。
        if (entries[0].isIntersecting) {
          this.loadStart();
        }
      });
      this.observer.observe(this.$refs.img);
    } else {
      this.loadStart();
    }
  },
  methods: {
    loadStart() {
      if (!this.load) {
        this.loading = "loading";
        this.load = true;
        // 因为有消耗性能，所以在图片开始加载必须要停止监听，解绑元素。
        if (this.observer) {
          this.observer.unobserve(this.$refs.img); //解绑元素
          this.observer.disconnect(); //停止监听
        }
      }
    },
    loadEnd() {
      this.$emit("load", this.src);
      this.loading = "";
      if (this.$parent.type === "fall") {
        this.$refs.img.style.height = "auto";
      }
    },
  },
};
</script>