import { computed, reactive } from 'vue';

const state = reactive({
  message: 'This is a message'
});

const getters = {
  message: computed(() => state.message)
};
const actions = {
  setMessage: (newMassage: string) => {
    state.message = newMassage;
  }
};

export const useHelloWorld = () => ({
  ...getters,
  ...actions
});
