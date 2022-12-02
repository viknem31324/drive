<template>
  <header class="header">
    <MyLogo class="header__logo">
      Need for drive
    </MyLogo>
    <div class="geo-location">Ульяновск</div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import MyLogo from '@/shared/ui/logo/MyLogo.vue';

export default Vue.extend({
  data() {
    return {};
  },
  components: {
    MyLogo
  },
});
</script>
<style lang="scss" src="./index.scss" scoped />