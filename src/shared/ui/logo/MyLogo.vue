<template>
  <div class="logo">
    <router-link class="logo__link" :tag="'a'" :to="'/'">
      <slot>Logo</slot>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },
});
</script>
<style lang="scss" src="./index.scss" scoped />