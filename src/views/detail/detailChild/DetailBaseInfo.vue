<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="goods-title">{{ goods.title }}</div>
    <div class="goods-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="goods-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="goods-services">
      <span
        class="goods-services-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" alt="" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  color: #999;
  border-bottom: 5px solid f2f5f8;
  padding: 0 8px;
}
.goods-title {
  color: #222;
}
.goods-price {
  margin-top: 10px;
}
.goods-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.goods-price .o-price {
  font-size: 14px;
  margin-left: 5px;
  text-decoration: line-through;
}
.goods-price .discount {
  font-size: 12px;
  background-color: var(--color-high-text);
  color: #fff;
  padding: 2px 5px;
  margin-left: 5px;
  border-radius: 8px;
  position: relative;
  top: -8px;
}
.goods-other {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  font-size: 13px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.goods-services {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
}
.goods-services-item span {
  font-size: 13px;
  color: #333;
}
.goods-services-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
</style>
