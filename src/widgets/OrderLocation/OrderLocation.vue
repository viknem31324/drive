<template>
  <div class="order-location">
    <div class="order-location__input">
      <MyInput label="Город" type="text" :value="getCity" placeholder="Начните вводить город" @input="setCity($event)" :list="list" />
      <MyInput label="Пункт выдачи" type="text" :value="getPoint" placeholder="Начните вводить пункт..." @input="setPoint($event)" :list="list" />
    </div>
    <div class="order-location__block">
      <div class="order-location__descr">Выбрать на карте:</div>
      <div class="order-location__map"></div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import MyInput from '@/shared/ui/input/MyInput.vue';
import { mapGetters, mapMutations } from 'vuex';
import {CITY_LIST} from '../../shared/mocks/list/cityList';

export default Vue.extend({
  data() {
    return {
      list: CITY_LIST,
    };
  },
  components: {
    MyInput,
  },
  methods: {
    ...mapMutations(['setCity', 'setPoint']),
  },
  computed: {
    ...mapGetters(['getCity', 'getPoint']),
  }
});
</script>
<style lang="scss" src="./index.scss" scoped />