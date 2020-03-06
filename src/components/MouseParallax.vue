<template>
  <div ref="mouse-parallax" class="mouse-parallax">
    <slot></slot>
  </div>
</template>

<script>
import MouseParallaxClass from '@/core/MouseParallax';

export default {
  name: 'MouseParallax',
  data() {
    return {
      parallaxInstance: null,
    };
  },
  methods: {
    setupMouseParallax() {
      const parallaxWrap = this.$refs['mouse-parallax'];
      if (parallaxWrap) {
        this.parallaxInstance = new MouseParallaxClass(parallaxWrap);
        this.parallaxInstance.init();
      }
    },
  },
  mounted() {
    this.setupMouseParallax();
  },
  beforeDestroy() {
    this.parallaxInstance.destroy();
  },
};
</script>

<style lang="less">
.mouse-parallax {
  user-select: none;
  [data-prax] {
  }
}
</style>
