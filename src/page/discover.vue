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
          <span class="text">更多</span>
          <i class="icon">></i>
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
    <!-- 独家放送 -->
    <div class="exclusive-wrapper">
      <div class="title-inner">
        <div class="left">
          <i class="icon"></i>
          <span class="text">推荐歌单</span>
        </div>
        <div class="right">
          <span class="text">更多</span>
          <i class="icon">></i>
        </div>
      </div>
      <div class="privatecontent-list">
        <section class="priv-item" v-for="item in PrivatecontentList" :key="item.id">
          <img :src="item.sPicUrl" alt="" class="priv-item__img">
          <p class="desc" v-text="item.name"></p>
        </section>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="recent-wrapper">
      <div class="title-inner">
        <div class="left">
          <i class="icon"></i>
          <span class="text">推荐歌单</span>
        </div>
        <div class="right">
          <span class="text">更多</span>
          <i class="icon">></i>
        </div>
      </div>
      <ul class="newsong-list">
        <li class="song-item" v-for="(item, index) in newSongList" :key="item.id">
          <div class="song-cover">
            <span class="index">{{index}}</span>
            <img class="cover" :src="item.song.album.picUrl" alt="">
          </div>
          <div class="song-info">
            <span class="song-name">{{item.song.name}}</span>
            <small class="singer">{{item.song.artists[0].name}}</small>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="ecmascript-6">
import Banner from "../components/Banner.vue";
import {
  getPersonalizedApi,
  getPrivatecontentApi,
  getNewSongApi
} from "../service/api";
export default {
  name: "",

  data() {
    return {
      recommendList: [],
      PrivatecontentList: [],
      newSongList: []
    };
  },

  components: {
    Banner
  },

  created() {
    this._getPersonalized();
    this._getPrivatecontent();
    this._getNewSong();
  },

  mounted() {},

  methods: {
    _getPersonalized() {
      getPersonalizedApi().then(res => {
        if (res.data.code === 200) {
          this.recommendList = res.data.result;
        }
      });
    },
    _getPrivatecontent() {
      getPrivatecontentApi().then(res => {
        if (res.data.code === 200) {
          this.PrivatecontentList = res.data.result;
        }
      });
    },
    _getNewSong() {
      getNewSongApi().then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.newSongList = res.data.result;
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
      justify-content: space-between;
      margin-bottom: 6px;
      height: 40px;
      line-height: 40px;
      color: #999;
      border-bottom: 1px solid #e8e8e8;
      .left {
        font-size: 14px;
        .icon {
          color: #d43b33;
        }
        .text {
        }
      }
      .right {
        font-size: 12px;
      }
    }
    .recommend-list {
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .recomd-box {
        position: relative;
        width: 20%;
        box-sizing: border-box;
        padding: 6px 8px;
        margin-bottom: 20px;
        &:after {
          display: block;
          content: "";
          margin-top: 100%;
        }
        .recomd-cover {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          .play-count {
            position: absolute;
            right: 10px;
            top: 10px;
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
          position: absolute;
          bottom: -10px;
          left: 10px;
          right: 10px;
          font-size: 12px;
          line-height: 1.2;
          color: rgb(143, 138, 138);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .exclusive-wrapper {
    margin-top: 20px;
    .title-inner {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      height: 40px;
      line-height: 40px;
      color: #999;
      border-bottom: 1px solid #e8e8e8;
      .left {
        font-size: 14px;
        .icon {
          color: #d43b33;
        }
        .text {
        }
      }
      .right {
        font-size: 12px;
      }
    }
    .privatecontent-list {
      display: flex;
      justify-content: space-between;
      .priv-item {
        width: 32%;
        height: 100%;
        .priv-item__img {
          width: 100%;
          height: 100%;
        }
        .desc {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 8px;
          font-size: 12px;
          line-height: 1.2;
          color: rgb(143, 138, 138);
        }
      }
    }
  }
  .recent-wrapper {
    margin-top: 20px;
    .title-inner {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      height: 40px;
      line-height: 40px;
      color: #999;
      border-bottom: 1px solid #e8e8e8;
      .left {
        font-size: 14px;
        .icon {
          color: #d43b33;
        }
        .text {
        }
      }
      .right {
        font-size: 12px;
      }
    }
    .newsong-list {
      display: flex;
      flex-wrap: wrap;
      .song-item {
        display: flex;
        align-items: center;
        height: 60px;
        width: 50%;
        background: #f4f4f6;
        &:hover {
          background: #f2f2f3;
        }
        &:nth-child(even) {
          border-left: 1px solid #d2d2d4;
        }
        &:nth-child(3n + 1) {
          background: #fafafc;
        }
        .song-cover {
          display: flex;
          align-items: center;
          .index {
            display: inline-block;
            width: 28px;
            text-align: center;
            color: #959596;
          }
          .cover {
            width: 50px;
            height: 50px;
          }
        }
        .song-info {
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          .song-name {
            font-size: 13px;
            color: #515152;
          }
          .singer {
            font-size: 12px;
            color: #bababb;
          }
        }
      }
    }
  }
}
</style>
