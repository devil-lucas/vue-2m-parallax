<template>
  <div id="app">
    <Screen />
  </div>
</template>

<script>
import Screen from './examples/Screen';

export default {
  name: 'app',
  components: {
    Screen,
  },
};
</script>

<style lang="less">
@import './assets/style/reset.less';
</style>
