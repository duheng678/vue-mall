import { ADD_COUNTER, ADD_CART } from "./mutation-types";
export default {
  addCart(context, payload) {
    //查看商品是否已经添加到cartList中
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(
        item => item.iid === payload.iid
      );

      //如果已经添加，则count+1
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct);
        resolve("当前商品数量+1");
      } else {
        payload.count = 1;
        payload.isCheck = false;
        context.commit(ADD_CART, payload);
        resolve("添加了新的商品");
      }
    });
  }
};
