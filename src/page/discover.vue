<!-- 发现音乐 -->
<template>
  <div class="finder-container">
    <div class="banner-wrapper">
      <banner></banner>
    </div>
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
        <section class="recomd-box" v-for="item in recommendList" :key="item.id">
          <div class="recomd-cover" :style="{backgroundImage: `url(${item.picUrl})`}">
            <span class="play-count">{{item.playCount | ten}}</span>
          </div>
          <p class="recomd-desc">{{item.name}}</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script type="ecmascript-6">
import Banner from "../components/Banner.vue";
import { getPersonalizedApi } from "../service/api";
export default {
  name: "",

  data() {
    return {
      recommendList: []
    };
  },

  components: {
    Banner
  },

  created() {
    this._getPersonalized();
  },

  mounted() {},

  methods: {
    _getPersonalized() {
      getPersonalizedApi().then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.recommendList = res.data.result;
        }
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.finder-container {
  .banner-wrapper {
    margin-top: 20px;
  }
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
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .recomd-box {
        position: relative;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 30px;
        width: 15%;
        &:after {
          display: block;
          content: "";
          margin-top: 100%;
        }
        .recomd-cover {
          height: 100%;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          .play-count {
            position: absolute;
            right: 0;
            top: 0;
            height: 14px;
            line-height: 14px;
            color: #fff;
            padding: 0 8px;
            font-size: 12px;
            background: linear-gradient(
              to left,
              rgba(123, 123, 123, 0.8),
              rgba(123, 123, 123, 0.1)
            );
          }
        }
        .recomd-desc {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 8px;
          line-height: 1;
        }
      }
    }
  }
}
</style>
