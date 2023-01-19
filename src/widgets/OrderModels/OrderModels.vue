<template>
  <div class="order-models">
    <CheckList />
    <ul class="order-models__list">
      <li
        class="order-models__item car"
        v-for="(item, index) in searchCategori(cars)"
        :key="item.model"
        :class="getActiveClass(index)"
        @click="onModel(item)"
      >
        <div class="car__model">{{ item.model }}</div>
        <div class="car__price">{{ item.price }}</div>
        <!-- <img :src="require(item.img)" alt=""> -->
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";
import { CAR_LIST } from "@/shared/mocks/list/carList";
import CheckList from "@/entities/check-list/CheckList.vue";

export default Vue.extend({
  data() {
    return {
      model: "",
      cars: CAR_LIST,
      activeId: null,
    };
  },
  created() {
    this.setConfirmBtn(true);
    console.log(this.getConfirmBtn)
    console.log(111111111111111);
    this.setModel("");
  },
  updated() {
    // console.log(this.getModel);
    if (this.getModel !== "") {
      // this.setConfirmBtn(false);
    }
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === "location") {
      next();
    } else {
      if (this.getModel === "") {
        next(false);
      } else {
        next();
      }
    }
  },
  methods: {
    searchCategori(value) {
      if(this.getActiveCategori === 'Все модели') {
        return value;
      } else if(this.getActiveCategori === 'Эконом') {
        return value.filter(item => item.categori === 'eko');
      } else {
        return value.filter(item => item.categori === 'prem');
      }
    },
    onModel(value) {
      this.model = value.model;
      this.activeId = value.id;
      this.setModel(this.model);
      if (this.getModel !== "") {
        console.log(888888)
        // this.setConfirmBtn(false);
      }
    },
    getActiveClass(index) {
      return this.activeId === index ? 'order-models__item--active' : ''
    },
    ...mapMutations(["setModel", "setConfirmBtn"]),
  },
  computed: {
    ...mapGetters(["getModel", "getActiveCategori", "getConfirmBtn"]),
  },
  components: {
    CheckList,
  },
});
</script>
<style lang="scss" src="./index.scss" scoped />