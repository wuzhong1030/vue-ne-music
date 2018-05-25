<!-- 发现音乐 -->
<template>
  <div class="finder-container">
    <banner></banner>
    <nav class="nav-wrapper">
      <section class="nav-item">
        <div class="nav-item-wrapper">
          <div class="icon-wrapper">
            <i class="iconfont icon-fm"></i>
          </div>
          <div class="info-wrapper">
            <h5 class="name">私人FM</h5>
            <div class="title">享受你的专属音乐推荐</div>
          </div>
        </div>
      </section>
      <section class="nav-item">
        <div class="nav-item-wrapper">
          <div class="icon-wrapper">25</div>
          <div class="info-wrapper">
            <h5 class="name">每日歌曲推荐</h5>
            <div class="title">根据你的口味生成</div>
          </div>
        </div>
      </section>
      <section class="nav-item">
        <div class="nav-item-wrapper">
          <div class="icon-wrapper">
            <i class="iconfont icon-star"></i>
          </div>
          <div class="info-wrapper">
            <h5 class="name">排行榜</h5>
            <div class="title">最热音乐榜</div>
          </div>
        </div>
      </section>
    </nav>
    <!-- 推荐歌单 -->
    <div class="recommend-wrapper">
      <div class="title-inner">
        <div class="left">
          <i class="icon"></i>
          <span class="text">推荐歌单</span>
        </div>
        <div class="right">

        </div>
      </div>
      <div class="recommend-list">
        <section class="rec-inner">
          <div class="cover"></div>
          <p class="desc"></p>
        </section>
      </div>
    </div>
  </div>
</template>

<script type="ecmascript-6">
import Banner from "../components/Banner.vue";
export default {
  name: "",

  data() {
    return {};
  },

  components: {
    Banner
  },

  created() {},

  mounted() {},

  methods: {}
};
</script>

<style lang="postcss" scoped>
.finder-container {
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    .nav-item {
      flex: 1;
      .nav-item-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 54px;
        .icon-wrapper {
          display: inline-block;
          border: 1px solid #f8bbb8;
          text-align: center;
          color: #d43b33;
          font-size: 24px;
          width: 50px;
          height: 50px;
          line-height: 50px;
          border-radius: 50%;
          .iconfont {
            font-size: 24px;
            line-height: 1;
          }
        }
        .info-wrapper {
          display: inline-block;
          margin-left: 14px;
          line-height: 1;
          .name {
          }
          .title {
            margin-top: 8px;
            font-size: 12px;
            color: #999;
          }
        }
      }
      &:nth-child(2) {
        border-left: 1px solid #e8e8e8;
        border-right: 1px solid #e8e8e8;
      }
    }
  }
  .recommend-wrapper {
    margin-top: 20px;
    .title-inner {
      display: flex;
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #e8e8e8;
      .left {
        .icon {
          color: #d43b33;
        }
        .text {
        }
      }
      .right {
      }
    }
    .recommend-list {
      .rec-inner {
        .cover {
        }
        .desc {
        }
      }
    }
  }
}
</style>
