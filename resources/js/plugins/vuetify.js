import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.use(Vuetify, {
  theme: {
    primary: colors.orange,
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
  },
  iconfont: 'fa',
});
