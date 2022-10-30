<template>
  <div class="main" :class="{ dark: darkMode }">
    <the-header></the-header>
    <add-new-task @save-task="addTask"></add-new-task>
    <ul class="task-list" :class="{ dark: darkMode }">
      <task-detail
        v-for="(task, index) in tasks"
        :id="task.id"
        :key="task.id"
        :text="task.text"
        :active="task.active"
        :index="index"
        @change-status="changeStatus"
        @remove-task="removeTask"
      ></task-detail>
      <div class="controls">
        <span>{{ tasks.length }} items left</span>
        <div class="buttonsDesktop">
          <filter-panel
            :all-btn-id="'all-btn-desktop'"
            :active-btn-id="'active-btn-desktop'"
            :completed-btn-id="'completed-btn-desktop'"
            @change-filter="changeFilter"
          ></filter-panel>
        </div>
        <button
          id="clear"
          class="clear"
          :class="{ dark: darkMode }"
          @click="clearCompleted"
        >
          Clear Completed
        </button>
      </div>
    </ul>
    <div class="buttonsMobile">
      <filter-panel
        :all-btn-id="'all-btn-mobile'"
        :active-btn-id="'active-btn-mobile'"
        :completed-btn-id="'completed-btn-mobile'"
        @change-filter="changeFilter"
      ></filter-panel>
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import AddNewTask from "./components/AddNewTask.vue";
import TaskDetail from "./components/TaskDetail.vue";
import FilterPanel from "./components/FilterPanel.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    AddNewTask,
    TaskDetail,
    FilterPanel,
  },
  computed: {
    tasks() {
      return this.$store.getters["tasks"];
    },
    darkMode() {
      return this.$store.getters["darkMode"];
    },
  },
  methods: {
    addTask(data) {
      this.$store.dispatch("addNewTask", data);
    },
    changeStatus(id) {
      this.$store.dispatch("changeStatus", id);
    },
    removeTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
    clearCompleted() {
      this.$store.dispatch("clearCompleted");
    },
    changeFilter(filterBy) {
      this.$store.dispatch("changeFilter", filterBy);
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
  width: 100%;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  margin-top: 16px;
  background-color: white;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: -0.17px;
}
.task-list.dark {
  box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
  background-color: #25273d;
}

.main.dark {
  background-color: #171823;
  background-image: url(./assets/bg-mobile-dark.jpg);
}

.controls {
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 20px 20px;
  color: #9495a5;
}

.controls.dark {
  color: #5b5e7e;
}

.buttonsDesktop {
  display: none;
}

.clear {
  outline: none;
  border: none;
  cursor: pointer;
  color: #9495a5;
  background-color: transparent;
}

.clear.dark {
  color: #5b5e7e;
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
  .task-list {
    max-width: 540px;
    margin-top: 24px;
  }
  .main.dark {
    background-image: url(./assets/bg-desktop-dark.jpg);
  }
  .controls {
    height: 64px;
  }
  .buttonsDesktop {
    display: block;
  }
  .buttonsMobile {
    display: none;
  }
}
</style>
