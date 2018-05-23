<!--  -->
<template>
  <div class="serarch-wrapper">
    <div class="input-wrapper">
      <input type="text" class="input" v-model="keywords" placeholder="搜索音乐、歌手、歌词、用户" @keyup.enter="doSearchHandle">
      <i class="iconfont icon-remove" v-show="keywords" @click.stop="removeSearchHandle"></i>
      <i class="iconfont icon-search"></i>
    </div>
    <ul class="result-list" v-show="keywords">
      <li class="result-item">
        <i class="iconfont icon-search"></i>
        <span class="result">搜索"{{keywords}}"</span>
      </li>
      <li class="result-item" v-for="(item, index) in searchSuggest" :key="index">
        <i class="iconfont icon-search"></i>
        <span class="result">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
// import Clickoutside from "../common/clickoutside";
// import Emitter from "../common/emitter";
import { getSearchSgtApi, getSearchResApi } from "../service/api";
import { debounce } from "../common/util.js";

export default {
  data() {
    return {
      searchResult: null,
      searchSuggest: null,
      keywords: "",
    };
  },

  // directives: {
  //   Clickoutside
  // },

  // mixins: [Emitter],

  components: {},

  computed: {},

  watch: {},

  created() {
    this.$watch(
      "keywords",
      debounce(() => {
        this.handleSearchInput();
      }, 300)
    );
  },

  methods: {
    removeSearchHandle(e) {
      this.keywords = "";
    },
    doSearchHandle() {
      getSearchResApi(this.keywords).then(res => {
        if (res.data.code === 200) {
          console.log(res);
          this.searchResult = res.data.result.songs;
        }
      });
    },
    handleSearchInput() {
      getSearchSgtApi(this.keywords).then(res => {
        if (res.data.code === 200) {
          this.searchSuggest = res.data.result.songs;
        }
      });
    }
  },

  mounted() {
   
  }
};
</script>
<style scoped lang="postcss">
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
    .icon-remove {
      position: absolute;
      right: 38px;
      top: 50%;
      font-size: 16px;
      color: #bebebe;
      transform: translateY(-50%);
    }
  }
  .result-list {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 10;
    max-height: 400px;
    overflow: auto;
    background-color: #fff;
    .result-item {
      padding-left: 8px;
      height: 38px;
      line-height: 38px;
      border-right: 1px solid #eaeaed;
      border-bottom: 1px solid #eaeaed;
      border-left: 1px solid #eaeaed;
      &:hover {
        background: #f2f2f3;
      }
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
</style>