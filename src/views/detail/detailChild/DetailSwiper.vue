<template>
  <swiper>
    <swiper-item />
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    swiperImage: {
      type: Array,
      default: []
    }
  }
};
</script>

<style></style>
