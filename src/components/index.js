import MouseParallaxPlugin from '../plugins/MouseParallax';
import MouseParallax from './MouseParallax';

MouseParallaxPlugin.setup();

const Parallax = {
  install(Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component(MouseParallax.name, MouseParallax);
  },
};

export { MouseParallax };

export default Parallax;
