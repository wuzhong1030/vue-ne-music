<template>
  <div class="menu-container">
    <div class="menu-item bar">
      <i class="iconfont icon-line"></i>
    </div>
    <router-link to="/search" tag="div" class="menu-item" :class="{'active': to.path === '/search'}">
      <i class="iconfont icon-search"></i>
      <span class="name">搜索</span>
    </router-link>
    <router-link to="/" tag="div" class="menu-item" :class="{'active': to.path === '/'}">
      <i class="iconfont icon-finder"></i>
      <span class="name">发现音乐</span>
    </router-link>
    <router-link to="/mv" tag="div" class="menu-item" :class="{'active': to.path === '/mv'}">
      <i class="iconfont icon-mv"></i>
      <span class="name">MV</span>
    </router-link>
    <router-link to="/friend" tag="div" class="menu-item" :class="{'active': to.path === '/friend'}">
      <i class="iconfont icon-friend"></i>
      <span class="name">朋友</span>
    </router-link>
  </div>
</template>

<script type="ecmascript-6">
export default {
  name: "",

  data() {
    return {
      to: {}
    };
  },

  watch: {
    '$route'(to, from) {
      this.to = to;
    }
  },

  components: {},

  created() {},

  mounted() {},

  methods: {}
};
</script>

<style lang="postcss">
.menu-container {
  width: 190px;
  height: 100%;
  border-right: 1px solid #ebebee;
  background: #f3f3f5;
  .menu-item {
    display: flex;
    align-items: center;
    padding-left: 14px;
    height: 38px;
    &:hover {
      background: #e8e8eb;
    }
    &.active {
      border-left: 2px solid #d43b33;
    }
    .name {
      font-size: 13px;
      margin-left: 10px;
      color: #666667;
    }
  }
}
</style>
