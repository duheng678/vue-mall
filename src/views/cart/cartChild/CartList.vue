<template>
  <better-scroll
    class="content"
    :pullUpLoad="true"
    ref="scroll"
    :data="[cartList]"
  >
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :product="item"
      >item</cart-list-item
    >
  </better-scroll>
</template>

<script>
import CartListItem from "./CartListItem.vue";
import BetterScroll from "components/common/betterScroll/BetterScroll";
import { mapGetters } from "vuex";
export default {
  name: "CartList",
  components: {
    CartListItem,
    BetterScroll
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.content {
  height: calc(100% - 133px);
  overflow: hidden;
}
</style>
