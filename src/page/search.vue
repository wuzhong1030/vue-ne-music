<!-- 搜索 -->
<template>
  <div class="search-container">
    <search-box></search-box>
    <div class="box-wrapper">
      <div class="hot">
        <h5 class="title">热门搜索</h5>
        <div class="tags">
          <span class="tag" v-for="(item, index) in hotTags" :key="index" v-text="item.first"></span>
        </div>
      </div>
      <div class="history">
        <h5 class="title">
          <span>搜索历史</span>
          <i class="iconfont icon-lajitong"></i>
        </h5>
        <div class="history-list"></div>
        <div class="no-history">暂无搜索历史</div>
      </div>
    </div>
  </div>
</template>

<script type="ecmascript-6">
import { getHotSearchApi } from "../service/api";
import SearchBox from "../components/SearchBox.vue";

export default {
  name: "",

  data() {
    return {
      hotTags: []
    };
  },

  components: { SearchBox },

  created() {
    this._initHotSearch();
  },

  watch: {},

  mounted() {},

  methods: {
    _initHotSearch() {
      getHotSearchApi().then(res => {
        if (res.data.code === 200) {
          this.hotTags = res.data.result.hots;
        }
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.search-container {
  padding: 10px 15px;

  .box-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 18px;
    .hot {
      flex: 1;
      .title {
        border-bottom: 1px solid #ececef;
        color: #8b8b8b;
        line-height: 30px;
      }
      .tags {
        margin-top: 12px;
        .tag {
          display: inline-block;
          padding: 0 7px;
          height: 22px;
          line-height: 22px;
          text-align: center;
          color: #666;
          font-size: 13px;
          border: 1px solid #d0d0d2;
          border-radius: 12px;
          &.tag {
            margin-right: 8px;
            margin-bottom: 10px;
          }
        }
      }
    }
    .history {
      flex: 1;
      margin-left: 35px;
      .title {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ececef;
        color: #8b8b8b;
        line-height: 30px;
        .icon-lajitong {
          &:hover {
            cursor: pointer;
          }
        }
      }
      .history-list {
      }
      .no-history {
        text-align: center;
        padding-top: 40px;
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
