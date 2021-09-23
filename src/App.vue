<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <qr-code></qr-code>

    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
import QrCode from "components/common/qrCode/QrCode";
export default {
  name: "App",
  components: {
    MainTabBar,
    QrCode
  }
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>
