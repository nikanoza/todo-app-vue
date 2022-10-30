import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      tasks: [],
      darkMode: false,
      filter: "All",
    };
  },
  getters: {
    tasks(state) {
      const actives = state.tasks.filter((task) => task.active);
      const completed = state.tasks.filter((task) => !task.active);
      return state.filter === "active"
        ? actives
        : state.filter === "completed"
        ? completed
        : state.tasks;
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
    changeStatus(state, payload) {
      let tasksClone = state.tasks.slice();
      let taskIndex = tasksClone.findIndex((task) => task.id === payload);
      tasksClone[taskIndex].active = !tasksClone[taskIndex].active;
      state.tasks = tasksClone;
    },
    deleteTask(state, payload) {
      let tasksClone = state.tasks.slice();
      let taskIndex = tasksClone.findIndex((task) => task.id === payload);
      tasksClone.splice(taskIndex, 1);
      state.tasks = tasksClone;
    },
    clearCompleted(state) {
      const clearTasks = state.tasks.filter((task) => task.active);
      state.tasks = clearTasks;
    },
    changeFilter(state, payload) {
      state.filter = payload;
    },
  },
  actions: {
    changeMode(context) {
      context.commit("changeMode");
    },
    addNewTask(context, data) {
      context.commit("addNewTask", data);
    },
    changeStatus(context, id) {
      context.commit("changeStatus", id);
    },
    deleteTask(context, id) {
      context.commit("deleteTask", id);
    },
    clearCompleted(context) {
      context.commit("clearCompleted");
    },
    changeFilter(context, filterBy) {
      context.commit("changeFilter", filterBy);
    },
  },
});

export default store;
