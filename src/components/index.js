import MouseParallax from './MouseParallax.vue';

const Plugin = {
  install(Vue) {
    Vue.component(MouseParallax.name, MouseParallax);
  },
};

export { MouseParallax };

export default Plugin;
