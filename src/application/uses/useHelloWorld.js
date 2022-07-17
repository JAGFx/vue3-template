import { computed, reactive, readonly } from 'vue';

const state = reactive({
  message: 'This is a message'
});

const getters = {
  message: computed(() => state.message)
};
const actions = {
  setMessage: (newMassage) => {
    state.message = newMassage;
  }
};

export const useHelloWorld = () => ({
  state: readonly(state),
  ...getters,
  ...actions
});
