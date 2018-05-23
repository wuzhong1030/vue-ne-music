<!-- 搜索 -->
<template>
  <div class="search-container">
    <div class="serarch-wrapper">
      <div class="input-wrapper">
        <input type="text" class="input" @input="handleSearchInput" @focus="resultVisible = true" @blur="resultVisible = false" v-model="keywords" placeholder="搜索音乐、歌手、歌词、用户">
        <i class="iconfont icon-search"></i>
      </div>
      <ul class="result-list" v-if="resultVisible&&keywords">
        <li class="result-item">
          <i class="iconfont icon-search"></i>
          <span class="result">搜索"{{keywords}}"</span>
        </li>
      </ul>
    </div>
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
import { getHotSearchApi, getInputSearchApi } from "../service/api";
import { debounce } from "../common/util.js";
// import _ from "lodash"
export default {
  name: "",

  data() {
    return {
      hotTags: [],
      searchResult: null,
      keywords: "",
      resultVisible: false
    };
  },

  components: {},

  created() {
    this._initHotSearch();
  },

  watch: {
    keywords(val, oldVal) {
      debounce(() => {
        this.handleSearchInput();
      }, 300);
    }
  },

  mounted() {},

  methods: {
    _initHotSearch() {
      getHotSearchApi().then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.hotTags = res.data.result.hots;
        }
      });
    },
    handleSearchInput() {
      getInputSearchApi(this.keywords).then(res => {
        console.log(res);
        if (res.data.code === 200) {
          this.searchResult = res.data.result;
        }
      });
    }
  }
};
</script>

<style lang="postcss" scoped>
.search-container {
  padding: 10px 15px;
  .serarch-wrapper {
    position: relative;
    .input-wrapper {
      position: relative;
      .input {
        width: 100%;
        height: 40px;
        padding-left: 8px;
        font-size: 16px;
        line-height: 30px;
        box-sizing: border-box;
        border: 1px solid #eaeaed;
        color: #444;
        outline: none;
        &::-webkit-input-placeholder {
          color: #d5d5d5;
        }
      }
      .icon-search {
        position: absolute;
        right: 8px;
        top: 50%;
        font-size: 18px;
        color: #d5d5d5;
        transform: translateY(-50%);
      }
    }
    .result-list {
      position: absolute;
      left: 0;
      right: 0;
      z-index: 10;
      background-color: #fff;
      .result-item {
        padding-left: 8px;
        height: 38px;
        line-height: 38px;
        border-right: 1px solid #eaeaed;
        border-bottom: 1px solid #eaeaed;
        border-left: 1px solid #eaeaed;
        .icon-search {
          color: #d8d8d9;
        }
        .result {
          color: #444;
        }
        &:first-child {
          .result {
            color: #4277ab;
          }
        }
      }
    }
  }
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
