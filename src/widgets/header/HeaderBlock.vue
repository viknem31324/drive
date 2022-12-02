<template>
  <header class="header">
    <MyLogo class="header__logo">
      Need for drive
    </MyLogo>
    <div class="geo-location">Ульяновск</div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyLogo from '@/shared/ui/logo/MyLogo.vue';
export default defineComponent({
  data() {
    return {
    }
  },
  components: {
    MyLogo
  }

});
</script>
<style lang="scss" src="./index.scss" />