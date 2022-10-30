<template>
  <div class="home">
    <burger-menu/>
    <div class="home__left"></div>
    <div class="home__right"></div>
  </div>
</template>

<script>
import BurgerMenu from '@/widgets/';
export default {
  components: {
    BurgerMenu,
  },
};
</script>
