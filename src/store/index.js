import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tasks: [],
      darkMode: false,
    };
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
    darkMode(state) {
      return state.darkMode;
    },
  },
  mutations: {
    changeMode(state) {
      state.darkMode = !state.darkMode;
    },
    addNewTask(state, payload) {
      state.tasks.push(payload);
    },
  },
  actions: {
    changeMode(context) {
      context.commit("changeMode");
    },
    addNewTask(context, data) {
      context.commit("addNewTask", data);
    },
  },
});

export default store;
