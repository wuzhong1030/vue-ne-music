<template>
  <div id="app">
    <div class="main-container">
      <m-header></m-header>
      <div class="content-wrapper">
        <div class="left-wrapper">
          <slide-menu></slide-menu>
        </div>
        <div class="right-wrapper">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MHeader from "@components/Header";
import SlideMenu from "@components/SlideMenu";
export default {
  name: "App",
  components: { MHeader, SlideMenu }
};
</script>

<style lang="postcss">
@import "./assets/style/common.css";
@import "./assets/iconfont/iconfont.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .main-container {
    width: 70vw;
    height: 80vh;
    min-width: 1150px;
    min-height: 666px;
    background: #fff;
    box-shadow: 0 0 20px 10px #eee;
    .content-wrapper {
      display: flex;
      height: calc(80vh - 36px);
      .left-wrapper {
        flex: 0 0 100px;
      }
      .right-wrapper {
        margin: 0 auto;
        min-width: 960px;
        padding: 0 10%;
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
      }
    }
  }
}
</style>
