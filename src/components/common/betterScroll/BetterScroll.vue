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
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, {});
  }
};
</script>

<style></style>
