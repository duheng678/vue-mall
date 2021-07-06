<template>
  <div class="tab-bar-item">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="active-item-icon"></slot></div>
    <div><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem"
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  height: 49px;
  background-color: red;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
}
</style>
