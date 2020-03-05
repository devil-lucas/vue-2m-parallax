import MouseParallax from '../utils/MouseParallax';

const Parallax = {
  install(Vue) {
    Object.defineProperty(Vue.prototype, '$MouseParallax', { value: MouseParallax });
    if (window) {
      window.MouseParallax = MouseParallax;
    }
  },
};

export default Parallax;
