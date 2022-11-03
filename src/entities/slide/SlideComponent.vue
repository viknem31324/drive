<template>
  <div class="slide">
    <h2 class="slide__title">{{ slide.title }}</h2>
    <div class="slide__descr"> {{ slide.descr }}</div>
    <my-button class="slide__btn"
        :theme="slide.btnTheme"
        :disabled="false"
        :onClick="overOrder"
        >Подробнее</my-button>
    <img class="slide__img" :src="require(`@/app/assets/img/${slide.img}`)" :alt="'Слайд ' + slide.id">
  </div>
</template>

<script>
import { MyButton } from '@/shared';

export default {
  data() {
    return {
    }
  },
  props: {
    slide: {
      type: Object,
      required: true
    }
  },
  components: {
    MyButton
  },
  methods: {
    overOrder: {

    }
  }
}
</script>