<template>
  <header class="header">
    <my-logo class="header__logo">
      Need for drive
    </my-logo>
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