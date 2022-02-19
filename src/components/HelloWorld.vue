<template>
  <div>
    <h2>{{ message }}</h2>
    <div><button @click="count++">+</button></div>
    <code>{{ count }}</code>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: String
  },
  data() {
    return {
      count: 0
    };
  }
};
</script>
