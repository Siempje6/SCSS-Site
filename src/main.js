// import 'vue-swipe-button/dist/vue-swipe-button.umd.min.css';  <-- verwijder dit
import Vue from 'vue';
import SwipeButton from 'vue-swipe-button';


Vue.use(SwipeButton);

import App from 'App.vue';

new Vue({
  render: h => h(App)
}).$mount('#app');
