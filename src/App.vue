<template>
  <div class="main">
    <the-header></the-header>
    <add-new-task @save-task="addTask"></add-new-task>
    <ul class="task-list" v-for="task in tasks" :key="task.id">
      <task-detail
        :id="task.id"
        :text="task.text"
        :active="task.active"
        :key="task.id"
      ></task-detail>
    </ul>
  </div>
</template>

<script>
import TheHeader from "./components/leyout/TheHeader.vue";
import AddNewTask from "./components/AddNewTask.vue";
import TaskDetail from "./components/TaskDetail.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    AddNewTask,
    TaskDetail,
  },
  computed: {
    tasks() {
      return this.$store.getters["tasks"];
    },
  },
  methods: {
    addTask(data) {
      this.$store.dispatch("addNewTask", data);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: 100vw;
  min-height: 100vh;
  background-color: #f2f2f2;
  background-image: url(./assets/bg-mobile-light.jpg);
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 48px 24px 126px 24px;
  font-family: "Josefin Sans", sans-serif;
  overflow-x: hidden;
}

.task-list {
  list-style: none;
}

@media (min-width: 768px) {
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(./assets/bg-desktop-light.jpg);
    padding-top: 70px;
    background-size: 100% 300px;
  }
}
</style>
