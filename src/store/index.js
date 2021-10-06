import { createStore } from "vuex";
import mainApi from "@/api/serve";

export default createStore({
  state: {
    test: "1234abc",
  },
  mutations: {
    apiData(state, payload) {
      state.test = payload;
    },
  },
  actions: {
    async fetchTest({ commit }) {
      try {
        const res = await mainApi.get("/menu");
        commit("apiData", res.data);
      } catch (err) {
        return Promise.reject(err);
      }
    },
  },
  getters: {
    getTest(state) {
      return state.test;
    },
  },
  modules: {},
});
