<template>
  <div id="app">
    <div class="wrapper">
      <BurgerMenu class="home__burger" />
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import BurgerMenu from '@/widgets/burger-menu/BurgerMenu.vue';

export default Vue.extend({
  components: {
    BurgerMenu
  },
});
</script>
