<template>
  <div>
    <h1 class="m-4">{{ message }}</h1>
    <form>
      <div class="mb-3">
        <label for="message" class="form-label">Message:</label>
        <input
          id="message"
          v-model="message"
          type="text"
          class="form-control"
        />
      </div>
      <div class="row">
        <button class="btn btn-primary col" @click.prevent="count++">+</button>
        <input v-model="number1" type="number" class="form-control my-2" />
        <code class="col d-flex justify-content-center align-items-center">{{
          count
        }}</code>
        <code class="col d-flex justify-content-center align-items-center">{{
          count + number1
        }}</code>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      count: 0,
      number1: 0
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
