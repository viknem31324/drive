<template>
  <div class="order">
    <HeaderBlock class="container order__header" /> 
    <OrderNav class="order__order-nav" />
    <div class="order__block container">
      <div class="order__content">
        <router-view />
      </div>
      <div class="order__progress">
        <ProgressBar :btn="getNameBtn" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import HeaderBlock from "@/widgets/header/HeaderBlock.vue";
import ProgressBar from "@/entities/progress-bar/ProgressBar.vue";
import OrderNav from "@/entities/order-nav/OrderNav.vue";

export default Vue.extend({
  updated() {
    console.log(this.getNameBtn)
    
  },
  computed: {
    getNameBtn() {
      switch(this.$route.fullPath) {
        case '/order/location':
          return 'Выбрать модель';
        case '/order/models':
          return 'Модель';  
        case '/order/additionally':
          return 'Дополнительно';
        case '/order/total':
          return 'Итого';
      }
      return '';
    },
  },
  components: {
    HeaderBlock,
    ProgressBar,
    OrderNav,
  },
});
</script>
<style lang="scss" src="./index.scss" scoped />