<template>
  <nav-bar class="detail-nav-bar">
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="middle" class="titles">
      <div
        v-for="(item, index) in titles"
        :key="index"
        class="title-item"
        @click="titleClick(index)"
        :class="{ active: index === currentIndex }"
      >
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
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    }
  }
};
</script>

<style scoped>
.titles {
  display: flex;

  padding: 0 20px;
  background-color: #fff;
}
.title-item {
  flex: 1;
  font-size: 14px;
}
.back img {
  margin-top: 10px;
}
.active {
  color: var(--color-high-text);
}
</style>
