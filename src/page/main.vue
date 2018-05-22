<template>
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
</template>

<script>
import MHeader from "@components/Header";
import SlideMenu from "@components/SlideMenu";
export default {
  name: "Main",

  data() {
    return {};
  },

  components: { MHeader, SlideMenu },



  created() {},

  mounted() {},

  methods: {}
};
</script>

<style lang="postcss">
.main-container {
  width: 80vw;
  height: 80vh;
  min-width: 627px;
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
      min-width: 480px;
      max-width: 960px;
      flex: 1;
    }
  }
}
</style>
