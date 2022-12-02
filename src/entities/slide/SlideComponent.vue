<template>
  <div class="slide">
    <h2 class="slide__title">{{ slide.title }}</h2>
    <div class="slide__descr"> {{ slide.descr }}</div>
    <MyButton class="slide__btn"
        :theme="slide.btnTheme"
        @click.native="overOrder()"
        >Подробнее</MyButton>
    <img class="slide__img" :src="require(`@/shared/assets/img/${slide.img}`)" :alt="`Слайд ${slide.id}`">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MyButton from '@/shared/ui/button/MyButton.vue';

export default Vue.extend({
  data() {
    return {
    };
  },
  props: {
    slide: {
      type: Object,
      required: true
    },
  },
  components: {
    MyButton
  },
  methods: {
    overOrder(){
      console.log(111111)
    },
  },
});
</script>
<style lang="scss" src="./index.scss" scoped />