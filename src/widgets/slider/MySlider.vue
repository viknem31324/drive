<template>
  <swiper class="my-slider" slidesPerView="auto" :pagination="{ clickable: true }" mousewheel navigation :loop="true">
    <swiper-slide v-for="slide in slideArr" :key="slide.id" >
      <slide-component :slide="slide"></slide-component>
    </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<script>
import { Pagination, Mousewheel, Navigation } from "swiper";
import { SwiperCore, Swiper, SwiperSlide } from "swiper-vue2";
import { SlideComponent } from "../../entities";

import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination, Mousewheel, Navigation]);
export default {
  data() {
    return {
      slideArr: [
        { id: 1, title: "Бесплатная парковка", descr: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.", img: 'slider/jp-valery-1052513-unsplash.jpg' },
        { id: 2, title: "Страховка", descr: "Полная страховка страховка автомобиля", img: 'slider/jp-valery-1052513-unsplash (1).jpg' },
        { id: 3, title: "Бензин", descr: "Полный бак на любой заправке города за наш счёт", img: 'slider/jp-valery-1052513-unsplash (2).jpg' },
        { id: 4, title: "Обслуживание", descr: "Автомобиль проходит еженедельное ТО", img: 'slider/jp-valery-1052513-unsplash (3).jpg' },]
    }
  },
  components: {
    Swiper,
    SlideComponent,
    SwiperSlide
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