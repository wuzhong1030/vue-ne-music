<!-- 轮播图 -->
<template>
  <div class="carousel-container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background-color: red;">slider1</div>
        <div class="swiper-slide" style="background-color: blue;">slider2</div>
        <div class="swiper-slide" style="background-color: green;">slider3</div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script type="text/ecmascript-6">
import Swiper from "swiper";
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  watch: {},

  created() {
    console.log(Swiper);
  },

  methods: {},

  mounted() {
    let certifySwiper = new Swiper(".swiper-container", {
      // watchSlidesProgress: true,
      // slidesPerView: "auto",
      // centeredSlides: true,
      // loop: true,
      // loopedSlides: 5,
      autoplay: true,
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev"
      // },
      pagination: {
        el: ".swiper-pagination"
      },
      on: {
        // progress: function(progress) {
        //   for (let i = 0; i < this.slides.length; i++) {
        //     var slide = this.slides.eq(i);
        //     var slideProgress = this.slides[i].progress;
        //     let modify = 1;
        //     if (Math.abs(slideProgress) > 1) {
        //       modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
        //     }
        //     let translate = slideProgress * modify * 160 + "px";
        //     let scale = 1 - Math.abs(slideProgress) / 5;
        //     let zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
        //     slide.transform(
        //       "translateX(" + translate + ") scale(" + scale + ")"
        //     );
        //     slide.css("zIndex", zIndex);
        //     slide.css("opacity", 1);
        //     if (Math.abs(slideProgress) > 3) {
        //       slide.css("opacity", 0);
        //     }
        //   }
        // },
        // setTransition: function(transition) {
        //   for (var i = 0; i < this.slides.length; i++) {
        //     var slide = this.slides.eq(i);
        //     slide.transition(transition);
        //   }
        // }
      }
    });
  }
};
</script>

<style lang="postcss">
.carousel-container {
  background: #eee;
  height: 120px;
  .swiper-container {
    height: 100%;
    .swiper-wrapper {
      width: 952px;
      height: 100%;
      overflow: hidden;
      .swiper-slide {
        width: 952px;
        .swiper-img {
          display: block;
          max-width: 100%;
        }
      }
    }
  }
  .swiper-pagination {
    left: 50%;
    transform: translate3d(0, -50%, 0);
    .swiper-pagination-bullet {
      .swiper-pagination-bullet-active {
      }
    }
  }
  .swiper-button-prev {
  }
  .swiper-button-next {
  }
}
</style>