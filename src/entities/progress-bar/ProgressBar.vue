<template>
  <div class="progress-bar">
    <div class="progress-bar__descr">Ваш заказ:</div>
    <ul class="progress-bar__list">
      <li class="progress-bar__item" v-for="item in getProgress" :key="item.title">
        <div class="progress-bar__title">{{ item.title }}</div>
        <div class="progress-bar__value">{{ item.value }}</div>
      </li>
    </ul>
    <div class="progress-bar__price">Цена: {{ getPrice }} </div>
    <MyButton class="progress-bar__btn" :theme="'btn-green'" @click.native="confirmProgress()">Выбрать модель</MyButton>
  </div>
</template>
<script>
import Vue from 'vue';
import MyButton from "@/shared/ui/button/MyButton.vue";
import { mapGetters } from 'vuex';
import { PROGRESS_BAR_LIST } from '../../shared/mocks/list/progressBarList';

export default Vue.extend({
  data() {
    return {
      titleList: PROGRESS_BAR_LIST,
    };
  },
  methods: {
    confirmProgress() {

    },
  },
  computed: {
    getProgress() {
      let progressList = []
      progressList.push({ title: this.titleList[0], value: this.getCityPoint});
      return progressList
    },
    ...mapGetters(['getPrice', 'getCityPoint']),
  },
  components: {
    MyButton,
  },
});
</script>
<style lang="scss" src="./index.scss" scoped />