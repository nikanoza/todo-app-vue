<template>
  <div class="panel" :class="{ dark: darkMode }">
    <button :style="colorAll" @click="changeFilter('All')">All</button>
    <button :style="colorActive" @click="changeFilter('active')">Active</button>
    <button :style="colorCompleted" @click="changeFilter('completed')">
      Completed
    </button>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  emits: ["change-filter"],
  setup(props, { emit }) {
    const store = useStore();
    const darkMode = computed(() => store.state.darkMode);
    const filterBy = computed(() => store.state.filter);
    const colorAll = computed(() => {
      return {
        color:
          filterBy.value === "All"
            ? "#3A7CFD"
            : darkMode.value
            ? "#5B5E7E"
            : "#9495a5",
      };
    });
    const colorActive = computed(() => {
      return {
        color:
          filterBy.value === "active"
            ? "#3A7CFD"
            : darkMode.value
            ? "#5B5E7E"
            : "#9495a5",
      };
    });

    const colorCompleted = computed(() => {
      return {
        color:
          filterBy.value === "completed"
            ? "#3A7CFD"
            : darkMode.value
            ? "#5B5E7E"
            : "#9495a5",
      };
    });

    const changeFilter = (filterBy) => {
      emit("change-filter", filterBy);
    };

    return {
      darkMode,
      filterBy,
      colorAll,
      colorActive,
      colorCompleted,
      changeFilter,
    };
  },
};
</script>

<style scoped>
.panel {
  width: 100%;
  height: 48px;
  background-color: white;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
}

.panel.dark {
  box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
  background-color: #25273d;
}

button {
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

@media (min-width: 768px) {
  .panel {
    max-width: 166px;
    margin-top: 0;
  }
}
</style>
