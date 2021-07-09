<template>
  <div class="item-info">
    <div class="item-button">
      <check-button
        @click.native="checkClick"
        :is-check="product.isCheck"
      ></check-button>
    </div>
    <div class="item-left">
      <img :src="product.image" alt="" />
    </div>
    <div class="item-right">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="right-bottom">
        <div class="item-price">￥{{ product.price }}</div>
        <div class="item-count">x{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
export default {
  name: "CartListItem",
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkClick() {
      this.product.isCheck = !this.product.isCheck;
    }
  }
};
</script>

<style scoped>
.item-info {
  width: 100%;
  display: flex;
  padding: 5px;
  font-size: 0;
  border-bottom: 1px solid #ccc;
  /* background: red; */
}
.item-button {
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-left {
  padding: 5px;
}
.item-left img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-desc,
.item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.item-right {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-right .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.right-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.right-bottom .item-price {
  color: orangered;
}
.right-bottom .item-count {
  float: right;
}
</style>
