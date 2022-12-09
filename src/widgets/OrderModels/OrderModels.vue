<template>
  <div class="order-models">
    <CheckList />
    <ul class="order-models__list">
      <li class="order-models__item car" v-for="item in cars" :key="item.model">
        <div class="car__model">{{ item.model }}</div>
        <div class="car__price">{{ item.price }}</div>
        <img :src="require(item.img)" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import { CAR_LIST } from '@/shared/mocks/list/carList';
import CheckList from '@/entities/check-list/CheckList.vue';

export default Vue.extend({
  data() {
    return {
      model: '',
      cars: CAR_LIST,
    };
  },
  created() {
    this.setModel('');
  },
  beforeRouteLeave(to, from, next) {
    this.setModel(this.model);
    console.log(1111111)
    if (this.getModel === ' ') {
      next(false);
    } else {
      next();
    }
  },
  methods: {
    // backgroundStyles(image:string) {
    //   return {
    //     'background-image': `url(../../shared/assets/img/cars/${image})`,
    //   }
    // },
    ...mapMutations(['setModel']),
  },
  computed: {
    ...mapGetters(['getModel']),
  },
  components: {
    CheckList,
  }
});
</script>


<style lang="scss" src="./index.scss" scoped />