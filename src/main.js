import Vue from 'vue';
import MouseParallax from './plugins/MouseParallax';
import App from './App';

Vue.use(MouseParallax);

new Vue({
  el: '#app',
  render: h => h(App)
});
