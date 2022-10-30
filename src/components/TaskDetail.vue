<template>
  <li class="task-item">
    <span
      class="checkbox"
      :class="{ dark: darkMode, active: !active }"
      @click="changeStatus"
    >
      <svg
        v-if="!active"
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="9"
      >
        <path
          fill="none"
          stroke="#FFF"
          stroke-width="2"
          d="M1 4.304L3.696 7l6-6"
        />
      </svg>
    </span>
    <p :style="color" class="text">{{ text }}</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      class="delete"
      @click="removeTask"
    >
      <path
        fill="#494C6B"
        fill-rule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </svg>
  </li>
  <div v-if="hrStatus" class="hr" :class="{ dark: darkMode }"></div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: 1,
    },
    text: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      default: 1,
    },
  },
  emits: ["change-status", "remove-task"],
  computed: {
    darkMode() {
      return this.$store.getters["darkMode"];
    },
    color() {
      return {
        color:
          this.darkMode && !this.active
            ? "#494c6b"
            : !this.darkMode && !this.active
            ? "#D1D2DA"
            : this.darkMode
            ? "#C8CBE7"
            : "#494C6B",
        textDecoration: !this.active ? "line-through" : "none",
      };
    },
    hrStatus() {
      const tasks = this.$store.getters["tasks"];
      return tasks.length > 0;
    },
  },
  methods: {
    changeStatus() {
      this.$emit("change-status", this.id);
    },
    removeTask() {
      this.$emit("remove-task", this.id);
    },
  },
};
</script>

<style scoped>
.task-item {
  width: 100%;
  height: 52px;
  display: flex;
  align-items: center;
  padding: 16px 20px 20px 20px;
}

.checkbox {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 50%;
  background: transparent;
}

.checkbox.active {
  background: linear-gradient(135deg, #55ddff 0%, #c058f3 100%);
  border: none;
}

.text {
  width: 240px;
  margin-right: 12px;
  margin-left: 12px;
  text-decoration: "none";
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.delete {
  margin-left: auto;
  cursor: pointer;
}

.hr {
  height: 1px;
  background-color: #e3e4f1;
}

.hr.dark {
  background-color: #393a4b;
}

@media (min-width: 768px) {
  .task-item {
    height: 64px;
  }
  .text {
    font-size: 18px;
    line-height: 18px;
  }
}
</style>
