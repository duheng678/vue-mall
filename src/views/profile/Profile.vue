<template>
  <div id="profile">
    <nav-bar class="profile-nav-bar">
      <div slot="middle">我的</div>
    </nav-bar>
    <profile-user-info />
    <profile-account-info />
    <profile-normal-list :list-data="orderList" />
    <profile-normal-list :list-data="serviceList" />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";

import ProfileUserInfo from "./profileChild/ProfileUserInfo.vue";
import ProfileAccountInfo from "./profileChild/ProfileAccountInfo.vue";
import ProfileNormalList from "./profileChild/ProfileNormalList.vue";
export default {
  name: "Profile",
  components: {
    NavBar,

    ProfileUserInfo,
    ProfileAccountInfo,
    ProfileNormalList
  },
  data() {
    return {
      orderList: [
        { icon: "message.svg", info: "我的消息" },
        { icon: "pointer.svg", info: "积分商城" },
        { icon: "vip.svg", info: "会员卡" }
      ],
      serviceList: [
        { icon: "cart.svg", info: "我的购物车" },
        { icon: "shopping.svg", info: "下载购物APP" }
      ]
    };
  }
};
</script>

<style scoped>
.profile-nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
