import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 5
  },
  getters:{
    newCount: state => state.count*3
  },
  mutations: {
    increment(state,value){
  state.count += value;
}
  },
  actions: {

  },
  modules: {}
});
