import Vue from 'vue';
import App from './App.vue';
import router from '../../router/pc/router';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (!/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent) && window.screen.height < window.screen.width) {
    window.location.href = '/pc.html#/';
  } else {
    window.location.href = '/moblie.html#/';
  }
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
