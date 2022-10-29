import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tasks: [],
    };
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
  },
});

export default store;
