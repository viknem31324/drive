<template>
  <div class="progress-bar">
    <div class="progress-bar__descr">Ваш заказ:</div>
    <ul class="progress-bar__list">
      <li class="progress-bar__item" v-for="item in getProgressList" :key="item.title">
        <div class="progress-bar__title">{{ item.title }}</div>
        <div class="progress-bar__value">{{ item.value }}</div>
      </li>
    </ul>
    <div class="progress-bar__price">Цена: {{ getPrice }} </div>
    <MyButton class="progress-bar__btn" :theme="'btn-green'" :disabled="disabled" @click.native="confirmProgress()">{{ btn }}</MyButton>
  </div>
</template>
<script>
import Vue from 'vue';
import MyButton from "@/shared/ui/button/MyButton.vue";
import { mapGetters, mapMutations } from 'vuex';
// import { PROGRESS_BAR_LIST } from '../../shared/mocks/list/progressBarList';

export default Vue.extend({
  data() {
    return {
      disabled: true,
      // titleList: PROGRESS_BAR_LIST,
    };
  },
  props: {
    btn: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['setProgress']),
    confirmProgress() {
      this.$router.push({name: 'models'})
    },
  },
  computed: {
    ...mapGetters(['getPrice', 'getProgressList']),
  },
  components: {
    MyButton,
  },
});
</script>
<style lang="scss" src="./index.scss" scoped />