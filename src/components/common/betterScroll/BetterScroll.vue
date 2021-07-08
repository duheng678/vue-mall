<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  name: "BetterScroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },

  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      observeDOM: true,
      click: true,
      pullUpLoad: this.pullUpLoad
    });
    //监控滚动的坐标，并传给Home组件
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroll.on("scroll", position => {
        // console.log(position);
        this.$emit("contentScroll", position);
      });
    }
    //监听滚动到底部，上拉加载更多事件
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    refresh() {
      return this.scroll && this.scroll.refresh();
    },
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      return this.scroll && this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style></style>
