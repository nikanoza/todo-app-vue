<template>
  <div class="card">
    <span class="checkbox"></span>
    <input type="text" placeholder="Create a new todo…" />
  </div>
</template>

<script>
export default {};
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
.checkbox {
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 50%;
}

input {
  width: 275px;
  height: 20px;
  font-size: 12px;
  line-height: 12px;
  font-weight: 400;
  letter-spacing: -0.17px;
  color: "#9495A5";
  outline: none;
  border: none;
  background-color: transparent;
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
