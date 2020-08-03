import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({})

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
