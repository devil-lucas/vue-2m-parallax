import Vue from 'vue';
import MouseParallax from './plugins/MouseParallax';
import App from './App';
import aa from 'vue-mouse-parallax-1.0.0';
console.log(aa);

Vue.use(MouseParallax);

new Vue({
  el: '#app',
  render: h => h(App)
});
