<template>
  <better-scroll class="category-content" :pullUpLoad="true">
    <div class="category-menu">
      <div
        v-for="(item, index) in categories"
        :key="index"
        class="menu-item"
        @click="itemClick(index)"
        :class="{ active: index === currentIndex }"
      >
        {{ item.title }}
      </div>
    </div>
  </better-scroll>
</template>

<script>
import BetterScroll from "components/common/betterScroll/BetterScroll";
export default {
  name: "CategoryMenu",
  components: {
    BetterScroll
  },
  props: {
    categories: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("selectItem", index);
    }
  }
};
</script>

<style scoped>
.category-content {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
  overflow: hidden;
}
.menu-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}
.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>
