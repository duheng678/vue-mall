<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.shopLogo" alt="" />
      <span>{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="middle-item middle-left">
        <div>
          <div class="sell-count">{{ shop.cSells | sellsFilter }}</div>
          <div class="sell-text">总销量</div>
        </div>
        <div>
          <div class="goods-count">{{ shop.cGoods }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="middle-item middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'better-score': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="text" :class="{ 'better-text': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellsFilter(value) {
      if (value < 10000) {
        return value;
      } else {
        return (value / 10000).toFixed(1) + "万";
      }
    }
  }
};
</script>

<style scoped>
.shop-info {
  border-top: 5px solid #f2f5f8;
  padding: 8px 25px;
}
.shop-top img {
  width: 45px;
  height: 45px;
  vertical-align: middle;
}
.shop-top span {
  margin-left: 10px;
}
.shop-middle {
  margin-top: 15px;

  display: flex;
  align-items: center;
}
.middle-item {
  flex: 1;
}
.middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sell-count,
.goods-count {
  font-size: 18px;
}
.sell-text,
.goods-text {
  margin-top: 10px;
  font-size: 13px;
}
.middle-right {
  font-size: 13px;
  color: #333;
}
.middle-right table {
  margin-left: 30px;
  width: 120px;
}
.middle-right table td {
  padding: 5px 0;
}
.middle-right .score {
  color: #5ea732;
}
.middle-right .better-score {
  color: #f13e3a;
}
.middle-right .text span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}
.middle-right .better-text span {
  background-color: #f13e3a;
}
.shop-bottom {
  text-align: center;
  margin-top: 10px;
}
.shop-bottom .enter {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>
