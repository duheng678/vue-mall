<template>
  <tab-bar>
    <tab-bar-item>
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="active-item-icon"
        src="~assets/img/tabbar/home_active.svg"
        alt=""
      />

      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item></tab-bar-item>
    <tab-bar-item></tab-bar-item>
    <tab-bar-item></tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabBar/TabBar";
import TabBarItem from "components/common/tabBar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style></style>
