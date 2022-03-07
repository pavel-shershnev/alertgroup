import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
    getData(state) {
      return state.data;
    },
  },
  mutations: {
    setData(state, object) {
      state.data = object;
    },
  },
  actions: {
    fetchData({ commit }) {
      fetch('data.txt')
        .then((response) => response.text())
        .then((text) => commit('setData', JSON.parse(text)));
    },
  },
  modules: {
  },
});
