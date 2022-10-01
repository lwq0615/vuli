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
        // 因为有消耗性能，所以在图片开始加载时必须要停止监听，解绑元素。
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

<style lang="scss" scoped>
.fall .vu-image-item_container {
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
  }
}

.grid .vu-image-item_container {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
}

.loading {
  position: relative;
}
.loading::before {
  content: "";
  display: block;
  background-color: #dcdfe6;
  position: absolute;
  opacity: 0.5;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 2;
}
.loading::after {
  position: absolute;
  content: "";
  display: block;
  transform: translate(-50%, -50%);
  background-image: url(/vuli/loading.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
  width: 40px;
  height: 40px;
  left: 50%;
  top: 50%;
  z-index: 3;
  animation: rotate 2s infinite linear;
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%);
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
}
</style>