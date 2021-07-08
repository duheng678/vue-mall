<template>
  <div class="goods-item">
    <img
      :src="goodsItem.show.img"
      alt=""
      @load="imageLoad"
      @click="goodsItemClick"
    />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("goodsItemImageLoad");
    },
    goodsItemClick() {
      this.$router.push("/detail" + this.goodsItem.iid);
    }
  }
};
</script>

<style scoped>
.goods-item {
  width: 48%;
  padding-bottom: 40px;
  position: relative;
}
.goods-info {
  font-size: 12px;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-item p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-item .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-item .collect {
  position: relative;
}
.goods-item .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url(~assets/img/common/collect.svg) 0 0/14px;
}
</style>
