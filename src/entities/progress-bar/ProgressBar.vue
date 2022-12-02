<template>
  <div class="progress-bar">
    <div class="progress-bar__descr">Ваш заказ:</div>
    <ul class="progress-bar__list">
      <li class="progress-bar__item" v-for="item in prBarArr" :key="item.title">
        <div class="progress-bar__title">{{ item.title }}</div>
        <div class="progress-bar__value">{{ item.value }}</div>
      </li>
    </ul>
    <div class="progress-bar__price">Цена: {{ getPrice }} ₽</div>
    <MyButton class="progress-bar__btn" :theme="'btn-green'" @click.native="confirmProgress()">Выбрать модель</MyButton>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import MyButton from "@/shared/ui/button/MyButton.vue";

export default Vue.extend({
  data() {
    return {
      getPrice: 16000,
      prBarArr: [
        {title: 'Пункт выдaчи', value: 'Ульяновск, Нариманова 42'},
        {title: 'Модель', value: 'Hyndai, i30 N'},
        {title: 'Цвет', value: 'Голубой'},
        {title: 'Длительность аренды', value: '1д 2ч'},
        {title: 'Тариф', value: 'На сутки'},
        {title: 'Полный бак', value: 'Да'},
      ]
    };
  },
  methods: {
    confirmProgress() {

    },
  },
  components: {
    MyButton,
  },
});
</script>
<style lang="scss" src="./index.scss" scoped />