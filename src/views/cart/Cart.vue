<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="middle">购物车({{ cartLength }})</div>
    </nav-bar>
    <cart-list />
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import CartList from "./cartChild/CartList.vue";
import CartBottomBar from "./cartChild/CartBottomBar.vue";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    cartLength() {
      return this.$store.getters.cartLength;
    }
  }
};
</script>

<style scoped>
#cart {
  position: relative;
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
