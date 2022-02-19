<template>
  <div>
    <div class="text-center">
      <img
        alt="Vue logo"
        src="./assets/img/logo.png"
        class="rounded img-fluid"
      />
    </div>
    <HelloWorld message="Hello Vue 3.0 + Vite" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
@import 'assets/scss/app';
</style>
