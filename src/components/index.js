import MouseParallax from './MouseParallax';

const Parallax = {
  install(Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component(MouseParallax.name, MouseParallax);
  },
};

export default Parallax;
