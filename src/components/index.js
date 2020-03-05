import MouseParallaxPlugin from '../plugins/MouseParallax';
import MouseParallax from './MouseParallax';

const Parallax = {
  install(Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.use(MouseParallaxPlugin);
    Vue.component(MouseParallax.name, MouseParallax);
  },
};

export default Parallax;
