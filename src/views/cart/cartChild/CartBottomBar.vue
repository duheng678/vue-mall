<template>
  <div class="bottom-bar">
    <div class="check-all">
      <check-button
        class="check-icon"
        :is-check="isSelectAll"
        @click.native="checkClick"
      ></check-button>
      <span>全选</span>
    </div>
    <div class="price">合计：{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去计算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  methods: {
    checkClick() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => (item.isCheck = false));
      } else {
        this.cartList.forEach(item => (item.isCheck = true));
      }
    },
    calcClick() {
      if (!this.checkLength) {
        this.$toast.show("请选择商品", 2000);
      }
    }
  },
  computed: {
    ...mapGetters(["cartList"]),

    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find(item => item.isCheck === false);
    },
    totalPrice() {
      return this.cartList
        .filter(item => item.isCheck)
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.cartList.filter(item => item.isCheck).length;
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  position: relative;
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #eee;
  font-size: 14px;
}
.check-all {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
}
.check-icon {
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.price {
  margin-left: 30px;
  width: 60px;
  flex: 1;
}
.calculate {
  width: 90px;
  background-color: var(--color-tint);
  color: #fff;
  text-align: center;
}
</style>
