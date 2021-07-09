import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const state = {
  cartList: []
};
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});

export default store;
