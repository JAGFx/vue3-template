<template>
  <div>
    <h1 class="text-3xl font-bold underline">{{ message }}</h1>
    <input v-model="message" type="text" />
    <div><button @click="count++">+</button></div>
    <code>{{ count }}</code>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: 0
    };
  },
  computed: {
    message: {
      get() {
        return this.$store.getters['app/getMessage'];
      },
      set(value) {
        this.$store.commit('app/setMessage', value);
      }
    }
  }
};
</script>
