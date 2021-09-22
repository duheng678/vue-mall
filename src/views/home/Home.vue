<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="middle">太好逛了吧！</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      v-show="isShowTabControl"
      ref="tabControl1"
      class="tab-control1"
    />
    <better-scroll
      ref="scroll"
      class="content"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="loadMore"
      @contentScroll="contentScroll"
      :data="[showGoods, banners]"
    >
      <home-swiper
        class="home-swiper"
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </better-scroll>
    <back-top v-show="isShowBackTop" @click.native="topClick"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BetterScroll from "components/common/betterScroll/BetterScroll";
// import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./homeChild/HomeSwiper.vue";
import HomeRecommend from "./homeChild/HomeRecommend.vue";
import HomeFeature from "./homeChild/HomeFeature.vue";

import { getHomeMultidata, getHomeGoodsList } from "network/home";

import { backTopMixin, imageLoadMixin } from "common/mixin";
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
      },
      currentType: "pop",
      offsetTop: 0,
      isShowTabControl: false,
      saveY: 0
    };
  },
  mixins: [backTopMixin, imageLoadMixin],
  created() {
    //获取轮播图和推荐图片
    this.getHomeMultidata();
    //获取商品信息
    this.getHomeGoodsList("pop");
    this.getHomeGoodsList("new");
    this.getHomeGoodsList("sell");
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
    this.$bus.$off("goodsItemImageLoad", this.imageListener);
  },
  methods: {
    //将轮播图和推荐图片保存在data中
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
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
        this.$refs.scroll.finishPullUp();
      });
    },
    //点击tabControl切换加载的图片
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //上拉加载更多
    loadMore() {
      this.getHomeGoodsList(this.currentType);
      this.$refs.scroll.refresh();
    },

    //监听滚动的坐标
    contentScroll(position) {
      //判断是否显示backTop图标
      this.isShowBackTop = -position.y > 1000;
      //判断tabControl是否显示
      this.isShowTabControl = -position.y > this.offsetTop;
    },
    //轮播图加载完毕，确定tabControl的offsetTop
    swiperImageLoad() {
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
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
.tab-control1 {
  position: relative;
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
