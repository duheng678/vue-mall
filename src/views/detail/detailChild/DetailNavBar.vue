<template>
  <nav-bar class="detail-nav-bar">
    <div slot="left" class="back">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="middle" class="titles">
      <div v-for="(item, index) in titles" :key="index" class="title-item">
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"]
    };
  }
};
</script>

<style scoped>
.titles {
  display: flex;

  padding: 0 20px;
}
.title-item {
  flex: 1;
  font-size: 14px;
}
.back img {
  margin-top: 10px;
}
</style>
