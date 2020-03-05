<template>
  <div id="screen">
    <MouseParallax>
      <div slot="main" class="stage">
        <img
          data-prax
          :src="parallax"
          class="cover"
        />
        <div data-prax="0.6" class="bbbb">
          测试bbbb
        </div>
        <div data-prax="0.4" class="cccc">
          测试cccc
        </div>
      </div>
    </MouseParallax>
  </div>
</template>

<script>
import MouseParallax from '../components/MouseParallax';
import parallax from '../assets/image/parallax.jpg';

export default {
  name: 'Screen',
  components: {
    MouseParallax,
  },
  data() {
    return {
      parallax,
    };
  },
};
</script>

<style lang="less" scoped>
#screen {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #201932;
  .stage {
    position: relative;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    > .cover {
      position: absolute;
      z-index: 1;
      top: -20vw;
      left: -40vh;
      width: 160vw;
      height: auto;
    }
    > .bbbb {
      position: absolute;
      z-index: 2;
      top: 120px;
      left: 120px;
      font-size: 36px;
      color: #fff;
    }
    > .cccc {
      position: absolute;
      z-index: 3;
      color: #fff;
      font-size: 36px;
      right: 200px;
      bottom: 120px;
    }
  }
}
</style>
