<template>
  <div class="header-container">
    <div class="logo-wrapper">
      <i class="icon"></i>
      <span class="name">网易云音乐</span>
    </div>
    <div class="btns-wrapper">
      <span class="close btn">
        <i class="icon"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "",

  data() {
    return {};
  },

  components: {},

  created() {},

  mounted() {},

  methods: {}
};
</script>

<style lang="postcss">
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  padding-left: 18px;
  background-color: #d43b33;
  .logo-wrapper {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 18px;
      height: 18px;
      background: url(../assets/images/header/logo.png) no-repeat scroll center
        center / 100% 100%;
    }
    .name {
      margin-left: 8px;
      line-height: 1;
      color: #fff;
      font-size: 15px;
    }
  }
  .btns-wrapper {
    height: 36px;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 36px;
      .icon {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      &.close {
        .icon {
          background-image: url(../assets/images/header/close.png);
        }
      }
      &:hover {
        cursor: pointer;
        background-color: #e81123;
      }
    }
  }
}
</style>
