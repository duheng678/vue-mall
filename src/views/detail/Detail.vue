<template>
  <div id="detail">
    <detail-nav-bar />
    <detail-bottom-bar />
    <detail-swiper :swiper-image="swiperImage" />
  </div>
</template>

<script>
import DetailNavBar from "./detailChild/DetailNavBar";
import DetailBottomBar from "./detailChild/DetailBottomBar";
import DetailSwiper from "./detailChild/DetailSwiper.vue";

import { getDetail } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailBottomBar,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      swiperImage: []
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      //将请求到的数据保存在data中进行分类
      const data = res.result;
      console.log(data);
      //保存轮播图数据
      this.swiperImage = data.itemInfo.topImages;
    });
  }
};
</script>

<style></style>
