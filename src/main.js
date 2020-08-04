import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    score1: 0,
    score2: 0
  },
  mutations: {
    update1(state, score1) {
      state.score1 = score1;
    },
    update2(state, score2) {
      state.score2 = score2;
    }
  }
})

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
