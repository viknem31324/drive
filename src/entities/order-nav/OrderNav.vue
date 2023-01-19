<template>
  <nav class="order-nav">
    <ul class="order-nav__list container">
      <li class="order-nav__item" v-for="item in getOrderNavArr" :key="item.name">
        <router-link class="order-nav__link"
          :to="item.link"
          :class="(item.link === $route.fullPath) ? 'order-nav__link--active': ''">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getOrderNavArr']),
  },
});
</script>
<style lang="scss" src="./index.scss" scoped />