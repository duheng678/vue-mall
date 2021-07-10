<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" ref="nav" />
    <better-scroll
      class="content"
      :probeType="3"
      :pullUpLoad="true"
      ref="scroll"
      @contentScroll="contentScroll"
      :data="[swiperImage,goodsList]"
    >
      <detail-swiper :swiper-image="swiperImage" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-params :params="params" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goods="goodsList" ref="recommend" />
    </better-scroll>
    <detail-bottom-bar @addCart="addToCart" />
    <back-top @click.native="topClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailNavBar from "./detailChild/DetailNavBar";
import DetailBottomBar from "./detailChild/DetailBottomBar";
import DetailSwiper from "./detailChild/DetailSwiper.vue";
import DetailBaseInfo from "./detailChild/DetailBaseInfo.vue";
import DetailShopInfo from "./detailChild/DetailShopInfo.vue";
import DetailGoodsInfo from "./detailChild/DetailGoodsInfo.vue";
import DetailParams from "./detailChild/DetailParams.vue";
import DetailCommentInfo from "./detailChild/DetailCommentInfo.vue";

import GoodsList from "components/content/goods/GoodsList";

import BetterScroll from "components/common/betterScroll/BetterScroll";
import { backTopMixin } from "common/mixin";

import { mapActions } from "vuex";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailBottomBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParams,
    DetailCommentInfo,

    GoodsList,
    BetterScroll
  },
  data() {
    return {
      iid: null,
      swiperImage: [],
      goods: {},
      shop: {},
      detailInfo: {},
      params: {},
      commentInfo: {},

      goodsList: [],
      detailsTops: [],
      currentIndex: 0
    };
  },
  mixins: [backTopMixin],
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      //将请求到的数据保存在data中进行分类
      const data = res.result;
      //保存轮播图数据
      this.swiperImage = data.itemInfo.topImages;
      //整理筛选商品标题、价格等信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //整理筛选店铺信息
      this.shop = new Shop(data.shopInfo);
      //整理详情页
      this.detailInfo = data.detailInfo;
      //整理商品参数信息
      this.params = new GoodsParam(data.itemParams.info, data.itemParams.rule);
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then(res => {
      this.goodsList = res.data.list;
    });
  },
  methods: {
    ...mapActions(["addCart"]),
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.detailsTops[index]);
    },
    imageLoad() {
      //所有图片加载完毕后刷新一次
      this.$refs.scroll.refresh();
      this.detailsTops.push(0);
      this.detailsTops.push(this.$refs.params.$el.offsetTop);
      this.detailsTops.push(this.$refs.comment.$el.offsetTop);
      this.detailsTops.push(this.$refs.recommend.$el.offsetTop);
      this.detailsTops.push(Number.MAX_VALUE);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      //滚动内容显示对应标题
      const positionY = -position.y;
      let length = this.detailsTops.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.detailsTops[i] &&
          positionY < this.detailsTops[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    addToCart() {
      const product = {};
      product.iid = this.iid;
      product.image = this.swiperImage[0];
      product.desc = this.goods.desc;
      product.title = this.goods.title;
      product.price = this.goods.realPrice;

      this.addCart(product).then(res => {
        this.$toast.show(res, 2000);
      });
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  height: 100vh;
}
.detail-nav-bar {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
