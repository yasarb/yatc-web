import Vue from 'vue';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const token = localStorage.getItem('access-token');

if (token) {
  axios.defaults.headers.common.Authorization = token;
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
