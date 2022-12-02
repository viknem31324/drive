<template>
  <Swiper class="my-slider" slidesPerView="auto" :pagination="{ clickable: true }" mousewheel navigation :loop="true">
    <SwiperSlide v-for="slide in getSlideArr" :key="slide.id">
      <SlideComponent :slide="slide"></SlideComponent>
    </SwiperSlide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </Swiper>
</template>
<script lang="ts">
import { Pagination, Mousewheel, Navigation } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import { mapGetters } from 'vuex';

import SlideComponent from "@/entities/slide/SlideComponent.vue";

import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination, Mousewheel, Navigation]);

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getSlideArr"])
  },
  components: {
    Swiper,
    SlideComponent,
    SwiperSlide,
  },
  swiperOptions: {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: true,
    pagination: true,
    mousewheel: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  },
};
</script>
<style lang="scss" src="./index.scss" scoped />