<!-- 轮播图 -->
<template>
  <div class="carousel-container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index" :style="{backgroundImage: `url(${item.picUrl})`}">
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import Swiper from "swiper";
import { getBanner } from "../service/api.js";
export default {
  data() {
    return {
      banner: []
    };
  },

  components: {},

  computed: {},

  watch: {},

  created() {},

  methods: {
    _initBanner() {
      getBanner().then(
        res => {
          if (res.data.code === 200) {
            this.banner = res.data.banners;
          }
          this.$nextTick(() => {
            this._initSwiper();
          });
        },
        err => {
          console.log(err);
        }
      );
    },
    _initSwiper() {
      new Swiper(".swiper-container", {
        watchSlidesProgress: true,
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        loopedSlides: 8,
        autoplay: 2000,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: ".swiper-pagination"
          //clickable :true,
        },
        on: {
          progress: function(progress) {
            for (let i = 0; i < this.slides.length; i++) {
              let slide = this.slides.eq(i),
                slideProgress = this.slides[i].progress,
                modify = 1;
              if (Math.abs(slideProgress) > 1) {
                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
              }
              let translate = slideProgress * modify * 254 + "px",
                scale = 1 - Math.abs(slideProgress) / 5,
                zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
              scale == 1
                ? slide.transform(`translate(${translate}) scale(1)`)
                : slide.transform(
                    `translate(${translate}, 16px) scale(${0.8})`
                  );
              slide.css("zIndex", zIndex);
              slide.css("opacity", 1);
              if (Math.abs(slideProgress) > 3) {
                slide.css("opacity", 0);
              }
            }
          },
          setTransition: function(transition) {
            for (let i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i);
              slide.transition(transition);
            }
          }
        }
      });
    }
  },

  mounted() {
    this._initBanner();
  }
};
</script>

<style lang="postcss">
.carousel-container {
  .swiper-container {
    .swiper-wrapper {
      width: 730px;
      height: 336px;
      .swiper-slide {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      height: 1.5px;
      width: 20px;
      border-radius: none;
      &.swiper-pagination-bullet-active {
        background: #bc2f2e;
      }
    }
  }
  .swiper-button-prev {
    left: 0;
    height: 100%;
    margin-top: 0;
    transform: translateY(-50%);
    background-size: 22.5px 18.3px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
  .swiper-button-next {
    right: 0;
    height: 100%;
    margin-top: 0;
    transform: translateY(-50%);
    background-size: 22.5px 18.3px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>