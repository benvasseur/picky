import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';
import LightBox from 'vue-image-lightbox';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

require('vue-image-lightbox/dist/vue-image-lightbox.min.css');

Vue.config.productionTip = false;

Vue.use(VueLazyLoad);

Vue.component('LightBox', LightBox);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
