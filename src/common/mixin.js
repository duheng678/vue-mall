import BackTop from "components/content/backTop/BackTop";
import { debounce } from "./utils";

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
    topClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    }
  }
};

export const imageLoadMixin = {
  data() {
    return {
      imageListener: null,
      newRefresh: null
    };
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 50);
    this.imageListener = () => {
      this.newRefresh();
    };
    this.$bus.$on("goodsItemImageLoad", this.imageListener);
  }
};
