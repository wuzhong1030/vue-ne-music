<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  }
};
</script>

<style lang="postcss">
@import "./assets/style/reset.css";
@import "./assets/iconfont/iconfont.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
