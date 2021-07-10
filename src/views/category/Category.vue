<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="middle">商品分类</div>
    </nav-bar>
    <div class="content">
      <category-menu :categories="categories" @selectItem="selectItem" />
      <better-scroll
        class="tab-content"
        :pullUpLoad="true"
        ref="scroll"
        :data="[categoryData]"
      >
        <category-menu-content :subCategories="showSubCategories" />
        <tab-control @tabClick="tabClick" :titles="['综合', '销量', '新品']" />
        <goods-list :goods="showCategoryDetail" />
      </better-scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import CategoryMenu from "./categoryChild/CategoryMenu.vue";
import CategoryMenuContent from "./categoryChild/CategoryMenuContent.vue";

import BetterScroll from "components/common/betterScroll/BetterScroll";
import { imageLoadMixin } from "common/mixin";

import {
  getCategory,
  getSubCategory,
  getCategoryDetail
} from "network/category";
export default {
  name: "Category",
  components: {
    NavBar,
    TabControl,
    GoodsList,

    BetterScroll,

    CategoryMenu,
    CategoryMenuContent
  },
  data() {
    return {
      categories: [],
      currentIndex: -1,
      categoryData: {},
      currentType: "pop"
    };
  },
  created() {
    this._getCategory();
  },
  deactivated() {
    this.$bus.$off("goodsItemImageLoad", this.imageListener);
  },
  mixins: [imageLoadMixin],
  methods: {
    //请求分类页面的数据
    _getCategory() {
      getCategory().then(res => {
        // console.log(res);
        //请求类别数据
        this.categories = res.data.category.list;
        //初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subCategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: []
            }
          };
        }
        //请求第一个分类的数据
        this._getSubCategories(0);
      });
    },
    //请求分类对应的内容
    _getSubCategories(index) {
      this.currentIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubCategory(maitKey).then(res => {
        // console.log(res);
        this.categoryData[index].subCategories = res.data;
        this.categoryData = { ...this.categoryData };

        this._getCategoryDetail("pop");
        this._getCategoryDetail("sell");
        this._getCategoryDetail("new");
      });
    },
    //请求分类内容的扩展
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then(res => {
        // console.log(res);
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "sell";
          break;
        case 2:
          this.currentType = "new";
          break;
      }
    },
    //点击分类选项，获取对应的下标，然后调用相应内容
    selectItem(index) {
      this._getSubCategories(index);
    }
  },

  computed: {
    showSubCategories() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subCategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    }
  }
};
</script>

<style scoped>
#category {
  height: 100vh;
  position: relative;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  position: absolute;
  top: 45px;
  bottom: 49px;
  left: 0;
  right: 0;
  display: flex;
}
.tab-content {
  flex: 1;
  height: 100%;
  overflow: hidden;
}
</style>
