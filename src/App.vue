<template>
  <div class="main">
    <the-header></the-header>
  </div>
</template>

<script>
import TheHeader from "./components/leyout/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
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
