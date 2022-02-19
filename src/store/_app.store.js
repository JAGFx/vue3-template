// initial state
const state = () => ({
  message: 'This is a message'
});

// getters
const getters = {
  getMessage: (state) => state.message
};

// actions
const actions = {};

// mutations
const mutations = {
  setMessage(state, message) {
    state.message = message;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
