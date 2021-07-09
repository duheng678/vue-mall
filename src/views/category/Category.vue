<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="middle">商品分类</div>
    </nav-bar>
    <div class="content"></div>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
export default {
  name: "Category",
  components: {
    NavBar
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
