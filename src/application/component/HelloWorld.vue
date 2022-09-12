<template>
  <div>
    <h1 class="m-4">{{ message }}</h1>
    <form>
      <div class="mb-3">
        <label for="message" class="form-label">Message:</label>
        <input
          id="message"
          type="text"
          class="form-control"
          :value="message"
          @input="(event) => setMessage(event.target.value)"
        />
      </div>
      <div class="row">
        <button class="btn btn-primary col" @click.prevent="count++">+</button>
        <input v-model="number1" type="number" class="form-control my-2" />
        <code class="col d-flex justify-content-center align-items-center">{{
          count
        }}</code>
        <code class="col d-flex justify-content-center align-items-center">{{
          sum(count, number1)
        }}</code>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useHelloWorld } from '@/application/uses/useHelloWorld';
import { sum } from '@/domain/work/work';
import { ref } from 'vue';

const count = ref(0);
const number1 = ref(0);
const { message, setMessage } = useHelloWorld();
</script>
