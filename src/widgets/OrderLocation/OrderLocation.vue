<template>
  <div class="order-location">
    <div class="order-location__input">
      <MyInput label="Город" type="text" :value="city" placeholder="Начните вводить город" @input="[(city = $event)]" :list="list" />
      <MyInput label="Пункт выдачи" type="text" :value="point" placeholder="Начните вводить пункт..." @input="[(point = $event)]" :list="list" />
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
      city: '',
      point: '',
      list: CITY_LIST,
    };
  },
  components: {
    MyInput,
  },
  created() {
    this.setCityPoint(' ');
    this.setModel('');
  },
  beforeRouteLeave(to, from, next) {
    this.setCityPoint(this.city + ' ' + this.point);
    console.log(1111111)
    if(this.getCityPoint === ' ') {
      next(false);
    }else {
      next();
    }
  },
  methods: {
    ...mapMutations(['setCityPoint', 'setModel']),
  },
  computed: {
    ...mapGetters(['getCityPoint']),
  }
});
</script>
<style lang="scss" src="./index.scss" scoped />