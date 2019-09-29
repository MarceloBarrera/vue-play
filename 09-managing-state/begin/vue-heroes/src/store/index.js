import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  heroes: [
    {
      id: 20,
      firstName: 'pepe',
      lastName: 'batman',
      capeCounter: 3,
      originDate: '08/01/1998',
      description: 'batman pepe',
    },
  ],
};
const mutations = {};
const actions = {};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
