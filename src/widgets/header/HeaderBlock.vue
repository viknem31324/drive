<template>
  <header class="header">
    <my-logo>
      Need for drive
    </my-logo>
    <slot></slot>
    <div class="geo-location">Ульяновск</div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MyLogo } from '../../shared';
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