<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="middle">太好逛了吧！</div>
    </nav-bar>
    <better-scroll class="content">
      <home-swiper class="home-swiper" :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control :titles="['流行', '新款', '精选']" />
      <goods-list :goods="showGoods" />
    </better-scroll>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BetterScroll from "components/common/betterScroll/BetterScroll";

import HomeSwiper from "./homeChild/HomeSwiper.vue";
import HomeRecommend from "./homeChild/HomeRecommend.vue";
import HomeFeature from "./homeChild/HomeFeature.vue";

import { getHomeMultidata, getHomeGoodsList } from "network/home";
export default {
  components: {
    NavBar,
    TabControl,
    GoodsList,
    BetterScroll,

    HomeSwiper,
    HomeRecommend,
    HomeFeature
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    //获取轮播图和推荐图片
    this.getHomeMultidata();
    //获取商品信息
    this.getHomeGoodsList("pop");
  },
  methods: {
    //将轮播图和推荐图片保存在data中
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    //将商品信息保存在data中
    getHomeGoodsList(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodsList(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
      });
    }
  },
  computed: {
    showGoods() {
      return this.goods["pop"].list;
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-navbar {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9; */
}

.content {
  position: absolute;
  top: 44px;
  bottom: 52px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
