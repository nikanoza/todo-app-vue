<template>
  <div class="card" :class="{ dark: darkMode }">
    <span
      class="checkbox"
      @click="changeStatus"
      :class="{ dark: darkMode, active: !status }"
    >
      <svg
        v-if="!status"
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
    <input
      type="text"
      placeholder="Create a new todo…"
      v-model.trim="text"
      @keydown.enter="addTask"
      :class="{ dark: darkMode }"
    />
  </div>
</template>

<script>
export default {
  emits: ["save-task"],
  data() {
    return {
      text: "",
      active: true,
    };
  },
  computed: {
    darkMode() {
      return this.$store.getters["darkMode"];
    },
    status() {
      return this.active;
    },
  },
  methods: {
    changeStatus() {
      this.active = !this.active;
    },
    addTask() {
      if (this.text.length > 3) {
        const tasks = this.$store.getters["tasks"];
        const newTask = {
          id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
          text: this.text,
          active: this.active,
        };

        this.$emit("save-task", newTask);
      }
    },
  },
};
</script>

<style scoped>
.card {
  width: 100%;
  height: 48px;
  background-color: white;
  box-shadow: 0px 35px 50px -15px rgba(194, 195, 214, 0.5);
  border-radius: 5px;
  margin-top: 40px;
  padding: 14px 20px;
  display: flex;
  column-gap: 12px;
}

.card.dark {
  box-shadow: 0px 35px 50px -15px rgba(0, 0, 0, 0.5);
  background-color: #25273d;
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

input {
  width: 275px;
  height: 20px;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: -0.17px;
  color: #9495a5;
  outline: none;
  border: none;
  background-color: transparent;
}

input.dark {
  color: #767992;
}

@media (min-width: 768px) {
  .card {
    max-width: 540px;
    height: 64px;
    align-items: center;
  }

  input {
    font-size: 18px;
    line-height: 18px;
  }
}
</style>
