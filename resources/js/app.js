import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './plugins/vuetify';
import './stylus/main.styl';
import 'jsoneditor/dist/jsoneditor.css';
import './assets/css/app.styl';

new Vue({
  router,
  store,
  axios,
  VueAxios,
  render: h => h(App),
}).$mount('#app');
